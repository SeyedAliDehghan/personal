import mongoose from 'mongoose'
import Comment from './comment'

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  tag:{
    type:String,
    required:true,
    defualt:'full'
  },
  description: {
    type: String,
    trim: true,
  },
  img:{
    type: String,
    required: true,
  },
  content:{
    type:String,
    required:true
  },
  slug:{
    type: String,
    required: true,
  },
  previewLink: {
    type: String,
    trim: true,
  },
  githubLink: {
    type: String,
    trim: true,
  },
},{
  timestamps:true
});

projectSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post",
})

projectSchema.pre('remove',async function(next){
  const project=this
  await Comment.deleteMany({post:project._id})
  next()
})


projectSchema.methods.showPublicSingle= function(req){
  const project=this
  const projectObject=project.toObject()
  projectObject.commentCount=project.comments.length
  projectObject.comments=project.comments
  const date = new Date(projectObject.createdAt);
  projectObject.publicDate=date.getDate()+
  "/"+(date.getMonth()+1)+
  "/"+date.getFullYear()+
  " "+date.getHours()+
  ":"+date.getMinutes()+
  ":"+date.getSeconds()
  return projectObject
}


projectSchema.methods.makeItPublick= function(req){
  const project=this
  const projectObject=project.toObject()

  projectObject.commentCount=project.comments.length
  delete projectObject.content

  const date = new Date(projectObject.createdAt);
  projectObject.publicDate=date.getDate()+
  "/"+(date.getMonth()+1)+
  "/"+date.getFullYear()+
  " "+date.getHours()+
  ":"+date.getMinutes()+
  ":"+date.getSeconds()
  return projectObject
}



export default mongoose.models.Project || mongoose.model("Project", projectSchema);
