import dbConnect from "../../../util/mongoose";
import Post from "../../../models/post";

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    const { id } = req.query;
    try {
        const post = await Post.findOne({slug:id});
        if (!Post) {
          return res.status(404).send({ error: "post not found!" });
        }
        await post.populate("comments");
        res.send(post.showPublicSingle(req));
      } catch (e) {
        console.log(e)
        res.status(500).send({ error: e.message });
      }
  }
  if (method === "DELETE") {
    const { id } = req.query;
    try {
        const post = await Post.findById(id);
        if (!post) {
          return res.status(404).send({ error: "no Post found!" });
        }
        await post.remove()
        res.send({message:"Post deleted"})
      } catch (e) {
        // console.log(e)
        res.status(500).send({error:e.message});
      }
  }
}
