import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
     name:{
          type: String,
          required: true,
          unique: true
     },
     description:{
          type: String,
          required: true,
          enum:['Addiction Support', 'Anxiety Support', 'Depression Support', 'Habit Building'],
          trim: true
     },
     author:{
          type:mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
     },
     isPublic:{
          type: Boolean,
     }
})

const Channel = mongoose.model("Channel", channelSchema);

export default Channel