import mongoose from 'mongoose'
import validator from 'validator'

const commentSchema = new mongoose.Schema({
  post:{
    type:mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'Post'
  },
  postTitle:{
    type:String,
    required: true
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is invalid");
      }
    },
  },
  comment: {
    type: String,
    required: true,
  },
});

// commentSchema.methods.makePublic = function () {
//   const comment=this
//   const commentObject = comment.toObject();
//   delete commentObject.email
//   delete commentObject.post
//   delete commentObject._id
//   return commentObject;
// };



export default mongoose.models.Comment || mongoose.model("Comment", commentSchema);

