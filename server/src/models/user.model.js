import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     clerkId: {
          type: String,
          required: true,
          unique: true
     },
     email: {
          type: String,
          required: true,
          unique: true
     },
     firstName: {
          type: String
     },
     lastName: {
          type: String
     },
     profileImage: {
          type: String
     },
     subscribedChannels:{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Channel'
     },
     createdChannels:{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Channel'
     }
}, {
     timestamps: true
})

const User = mongoose.model("User", userSchema);

export default User;