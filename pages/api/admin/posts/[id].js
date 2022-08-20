import dbConnect from "../../../../util/mongoose";
import Post from "../../../../models/post";
import slugify from "slugify";

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    const { id } = req.query;
    try {
      const post = await Post.findByIdAndDelete(id);
      if (!post) {
        return res.status(404).send();
      }
      res.send(post);
    } catch (e) {
      console.log(e)
      res.status(500).send({error:e.message});
    }
  }
  if (method === "PATCH") {
    const updates = Object.keys(req.body);
    const { id } = req.query;
    try {
      const post = await Post.findById(id);
      if (!post) {
        return res.status(404).send();
      }
      updates.forEach((update) => (post[update] = req.body[update]));
      post.slug=slugify(req.body.title)
      await post.save()
      res.send(post);
    } catch (e) {
      console.log(e)
      res.status(500).send({error:e.message});
    }
  }
}
