import Channel from "../models/channel.model.js";
import User from "../models/user.model.js";

export const AddChannelToDB = async (req, res) => {
     // console.log("Channel: ", req.body);
     const { name, description, author, isPublic } = req.body;
     try{

          // console.log("Name: ", name);
          // console.log("Description: ", description);
          // console.log("Author: ", author);
          // console.log("Public: ", isPublic);

          if(!name || !description || !author){
               return res.status(400).json({message:"All fields are required"})
          }

          const user = await User.findOne({clerkId: author});

          console.log("User: ", user);

          if(!user){
               return res.status(400).json({message:"User does not exist, please sign up"})
          }

          const authorId = user._id;

          const channelName = await Channel.findOne({name});

          if(channelName){
               return res.status(400).json({message:"Channel already exists"})
          }

          const channel = new Channel({
               name,
               description,
               author: authorId,
               isPublic
          })

          if (channel) {
               await channel.save();
          } else {
               return void res.status(400).json({
                    message: "Error: Could not save channel to DB",
               })
          }

          return void res.status(200).json({
               message: "Channel saved successfully",
          })
     }catch (error) {
          return void res.status(400).json({
               message: error.message,
          })
     }
}

export const FindChannelInDB = async (req, res) => {
     const { searchQuery } = req.body;
     try {

          const query = searchQuery.trim();

          // console.log("Query: ", query);

          const channel = await Channel.findOne({name:query, isPublic: true});

          // console.log("Channel: ", channel);

          const channelName = channel.name;

          return void res.status(200).json({
               message: "Channel found successfully",
               channelName
          })
     } catch (error) {
          return void res.status(400).json({
               message: error.message,
          })
     }
}