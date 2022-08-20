import dbConnect from "../../../../util/mongoose";
import Comment from "../../../../models/comment";
import Post from '../../../../models/post'

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    try {
        const comments = await Comment.find({});
        if (comments.length === 0) {
          return res.status(404).send();
        }
        res.send(comments);
      } catch (e) {
        res.status(400).send({ error: e.message });
      }
  }
  if (method === "POST") {
    const { post } = req.body;
    try {
      const Post = await Post.findById(post);
      if (!Post) {
        return res.status(404).send();
      }
      const PostComment = await Comment({
        ...req.body,
        postTitle: Post.title,
      });
      await PostComment.save();
      return res.status(201).send(PostComment);
    } catch (e) {
      console.log(e);
      res.status(400).send({ error: e.message });
    }
  }
}
