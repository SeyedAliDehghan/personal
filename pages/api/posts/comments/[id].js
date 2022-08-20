import dbConnect from "../../../../util/mongoose";
import Comment from "../../../../models/comment";
import Post from "../../../../models/post";

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    const { id } = req.query;
    try {
      const Post = await Post.findById(id);
      if (!Post) {
        return res.status(404).send();
      }
      await Post.populate({ path: "comments", select: "-email -_id" });
      if (Post.comments.length === 0) {
        return res.status(404).send();
      }
      res.send(Post.comments);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  }
  if (method === "DELETE") {
    const { id } = req.query;
    try {
      const comment = await Comment.findById(id);
      if (!comment) {
        return res.status(404).send();
      }
      comment.remove()
      res.send(comment);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  }
}
