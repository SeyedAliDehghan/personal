import mongoose from 'mongoose'
import Comment from './comment'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
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
},{
  timestamps:true
});

postSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post",
})

postSchema.pre('remove',async function(next){
  const post=this
  await Comment.deleteMany({post:post._id})
  next()
})


postSchema.methods.showPublicSingle= function(req){
  const post=this
  const postObject=post.toObject()
  postObject.commentCount=post.comments.length
  postObject.comments=post.comments
  const date = new Date(postObject.createdAt);
  postObject.publicDate=date.getDate()+
  "/"+(date.getMonth()+1)+
  "/"+date.getFullYear()+
  " "+date.getHours()+
  ":"+date.getMinutes()+
  ":"+date.getSeconds()
  return postObject
}


postSchema.methods.makeItPublick= function(req){
  const post=this
  const postObject=post.toObject()
  postObject.commentCount=post.comments.length
  delete postObject.content
  const date = new Date(postObject.createdAt);
  postObject.publicDate=date.getDate()+
  "/"+(date.getMonth()+1)+
  "/"+date.getFullYear()
  return postObject
}



export default mongoose.models.Post || mongoose.model("Post", postSchema);
