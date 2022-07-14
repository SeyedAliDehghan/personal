import mongoose from 'mongoose'
import validator from 'validator'

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is invalid");
      }
    },
  },
  phone: {
    type:String,
    trim:true,
  },
  text:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  }
});



export default mongoose.models.Message || mongoose.model("Message", messageSchema);

