import dbConnect from "../../../util/mongoose";
import Post from "../../../models/post";
import slugify from "slugify";
export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();

  if (method === "GET") {
    try {
      const posts = await Post.find({}).sort({createdAt:'desc'});
      // console.log(posts)
      if (posts.length === 0) {
        return res.status(404).send({ error: "no post found!" });
      }
      const result = [];
      const somefunction = await Promise.all(
        posts.map(async (post) => {
          await post.populate("comments");
          await result.push(post.makeItPublick(req));
          // console.log(project.makeItPublick(req))
        })
      );
      res.send(result);
    } catch (e) {
      console.log(e)
      res.status(500).send({ error: e.message });
    }
  }
}
