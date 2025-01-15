import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
     sender:{
          type:mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
     },
     receiver:{
          id:{
               type:mongoose.Schema.Types.ObjectId,
               required: true,
               refPath: 'receiver.type'
          },
          type:{
               type:String,
               required: true,
               enum:['User','Channel']
          },
     },
     content:{
          type: String,
          required: true,
          trim: true
     },
     image:{
          type:String
     }
}, {
     timestamps: true
});

const Message = mongoose.model("Message", messageSchema);

export default Message;