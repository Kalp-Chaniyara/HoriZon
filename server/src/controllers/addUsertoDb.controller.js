import { Webhook } from "svix";
import User from "../models/user.model.js";

export const AddUserToDB = async (req, res) => {
     // This is a generic method to parse the contents of the payload.
     // Depending on the framework, packages, and configuration, this may be
     // different or not required.

     const SIGNING_SECRET = process.env.SIGNING_SECRET

     if (!SIGNING_SECRET) {
          throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env')
     }

     // Create new Svix instance with secret
     const wh = new Webhook(SIGNING_SECRET)

     // Get headers and body
     const headers = req.headers
     const payload = req.body

     // Get Svix headers for verification
     const svix_id = headers['svix-id']
     const svix_timestamp = headers['svix-timestamp']
     const svix_signature = headers['svix-signature']

     // If there are no headers, error out
     if (!svix_id || !svix_timestamp || !svix_signature) {
          return void res.status(400).json({
               success: false,
               message: 'Error: Missing svix headers',
          })
     }

     let evt

     // Attempt to verify the incoming webhook
     // If successful, the payload will be available from 'evt'
     // If verification fails, error out and return error code
     try {
          evt = wh.verify(payload, {
               'svix-id': svix_id,
               'svix-timestamp': svix_timestamp,
               'svix-signature': svix_signature,
          })
     } catch (err) {
          console.log('Error: Could not verify webhook:', err.message)
          return void res.status(400).json({
               success: false,
               message: err.message,
          })
     }

     // Do something with payload
     const eventType = evt.type

     if (eventType === "user.created") {
          try {

               const { email_addresses, first_name, last_name, image_url, id } = evt.data;

               const user = await User.findOne({ email_address: email_addresses[0].email_address });

               if (user) {
                    return void res.status(400).json({
                         message: "User already exists",
                    })
               }

               const newUser = new User({
                    clerkId: id,
                    email: email_addresses[0].email_address,
                    firstName: first_name || "",
                    lastName: last_name || "",
                    profileImage: image_url || "../public/avatar.png",
               })

               if (newUser) {
                    await newUser.save();
               } else {
                    return void res.status(400).json({
                         message: "Error: Could not save user to DB",
                    })
               }

          } catch (error) {
               return void res.status(400).json({
                    message: error.message,
               })
          }
     }

     return void res.status(200).json({
          success: true,
          message: 'Webhook received',
     })
}