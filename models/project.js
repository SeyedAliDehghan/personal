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
  like: [
    {
      ip: {
        type: String,
      },
    },
  ],
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
  projectObject.likeCount=projectObject.like.length
  projectObject.commentCount=project.comments.length
  projectObject.comments=project.comments
  delete projectObject.like
  const isLiked = project.like.find((like) => {
    if (
      like.ip === req.ip
    ) {
      return true;
    }
    return false;
  });
  if (!isLiked) {
    projectObject.isLiked=false
  }else(
    projectObject.isLiked=true
  )
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
  projectObject.likeCount=projectObject.like.length
  projectObject.commentCount=project.comments.length
  delete projectObject.like
  delete projectObject.content
  const isLiked = project.like.find((like) => {
    if (
      like.ip === req.ip
    ) {
      return true;
    }
    return false;
  });
  if (!isLiked) {
    projectObject.isLiked=false
  }else(
    projectObject.isLiked=true
  )
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
