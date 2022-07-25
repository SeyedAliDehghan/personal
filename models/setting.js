import mongoose from 'mongoose'

const settingSchema = new mongoose.Schema({
  logo:{
    type:String
  },
  description:{
    type:String
  },
  technologies:[{
    name:{
      type:String
    }
  }],
  social:[{
    title:{
      type:String
    },
    fontClass:{
      type:String
    },
    url:{
      type:String
    }
  }]
});


export default mongoose.models.Setting || mongoose.model("Setting", settingSchema);
