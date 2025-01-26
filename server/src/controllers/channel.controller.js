import Channel from "../models/channel.model.js";
import User from "../models/user.model.js";

export const AddChannelToDB = async (req, res) => {
     // console.log("Channel: ", req.body);
     const { name, description, author, isPublic } = req.body;
     try {

          if (!name || !description || !author) {
               return res.status(400).json({ message: "All fields are required" })
          }

          const user = await User.findOne({ clerkId: author });

          console.log("User: ", user);

          if (!user) {
               return res.status(400).json({ message: "User does not exist, please sign up" })
          }

          const authorId = user._id;

          const channelName = await Channel.findOne({ name });

          if (channelName) {
               return res.status(400).json({ message: "Channel already exists" })
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
               channel
          })
     } catch (error) {
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

          const channel = await Channel.findOne({ name: query });

          // console.log("Channel: ", channel);

          if (channel === null) {
               return void res.status(200).json({
                    message: "Channel not found",
               })
          }

          const channelName = channel.name;

          return void res.status(200).json({
               message: "Channel found successfully",
               channelName
          })
     } catch (error) {
          console.error("Error fetching channel:", error);
          res.status(500).json({ message: "Server error" });
     }
}

export const FindChannelOfSpecificTypeInDB = async (req, res) => {
     const { type } = req.body;
     try {
          const channels = await Channel.find({ description: type });
          // console.log("Channels1: ", channels);
          if (channels === null) {
               return void res.status(200).json({
                    message: "Channel of specific type not found",
               })
          }
          return void res.status(200).json({
               message: "Channel of specific type found successfully",
               channels
          })
     } catch (error) {
          console.error("Error fetching channels by topic:", error);
          res.status(500).json({ message: "Server error" });
     }

}