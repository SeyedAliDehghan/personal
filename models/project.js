import mongoose from 'mongoose'
import Comment from './comment'

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  projectFullDescription: {
    type: String,
  },
  imgLink: {
    type: String,
    require: true,
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
  return projectObject
}


projectSchema.methods.makeItPublick= function(req){
  const project=this
  const projectObject=project.toObject()
  projectObject.likeCount=projectObject.like.length
  projectObject.commentCount=project.comments.length
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
  return projectObject
}



export default mongoose.models.Project || mongoose.model("Project", projectSchema);
