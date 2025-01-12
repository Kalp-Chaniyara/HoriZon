import e from "express";
import { connectDB } from "./src/lib/db.js";
import dotenv from "dotenv";
import cors from "cors";
import { Webhook } from "svix";
import bodyParser from "body-parser";

dotenv.config();

const app = e();
// app.use(e.json()); // To parse JSON request bodies
// app.use(e.urlencoded({ extended: true }));
app.use(cors({
     origin: "http://localhost:5173",
     credentials: true,
}))

//! Webhooks Endpoint
app.post(
     '/api/webhooks/add-user-to-db',
     // This is a generic method to parse the contents of the payload.
     // Depending on the framework, packages, and configuration, this may be
     // different or not required.
     bodyParser.raw({ type: 'application/json' }),

     async (req, res) => {
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
          // For this guide, log payload to console
          const { id } = evt.data
          const eventType = evt.type

          if(eventType === "user.created"){  //TODO: Add the User Data to the Database  (This is just a dummy example)
               try {
                    const {email_addresses} = evt.data;
                    console.log("MAIL", email_addresses);
               } catch (error) {
                    return void res.status   (400).json({
                         message: error.message,
                    })
               }
          }

          console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
          console.log('Webhook payload:', evt.data)

          return void res.status(200).json({
               success: true,
               message: 'Webhook received',
          })
     },
)

app.listen(3000, () => {
     console.log("Server is running on port 3000");
     connectDB();
});