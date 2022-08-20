import dbConnect from "../../../../util/mongoose";
import Post from "../../../../models/post";
import slugify from "slugify";

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "POST") {
    const post = new Post({...req.body,slug:slugify(req.body.title)});
    try {
      await post.save();
      res.status(201).send(post);
    } catch (e) {
      console.log(e);
      res.status(400).send({ error: e.message });
    }
  }
}
