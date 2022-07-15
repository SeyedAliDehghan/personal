import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    trim: true,
  },
  tokens:[{
    token:{
      type:String,
      required:true
    }
  }]
});


adminSchema.statics.findByCredentials = async (email, password) => {
  const admin = await mongoose.models.Admin.findOne({ email });
  if (!admin) {
    throw new Error("mybe wrong email?!");
  }
  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    throw new Error("Unable to login - Password mismatch");
  }
  return admin;
};


adminSchema.methods.generateAuthToken = async function(){
  const admin=this
  const token=jwt.sign({_id:admin._id.toString()},process.env.JWT_SECRET)
  admin.tokens=admin.tokens.concat({token})
  await admin.save()
  return token
};

adminSchema.methods.toJSON= function(){
  const admin=this
  const adminObject=admin.toObject()
  delete adminObject.password
  delete adminObject.tokens
  return adminObject
}


adminSchema.pre("save", async function (next) {
  const admin = this;
  if (admin.isModified("password")) {
    admin.password = await bcrypt.hash(admin.password, 8);
  }
  next();
});


export default mongoose.models.Admin || mongoose.model("Admin", adminSchema);
