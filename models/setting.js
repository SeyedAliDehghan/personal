import mongoose from 'mongoose'

const settingSchema = new mongoose.Schema({

  description:{
    type:String
  },
  technologies:[{
    name:{
      type:String
    }
  }],
});


export default mongoose.models.Setting || mongoose.model("Setting", settingSchema);
