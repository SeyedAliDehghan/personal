import dbConnect from "../../../../util/mongoose";
import Project from "../../../../models/project";

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    const { id } = req.query;
    try {
        const post = await Project.findById(id);
        if (!post) {
          return res.status(404).send();
        }
        const isLiked = post.like.find((like) => {
          if (like.ip === req.ip) {
            return true;
          }
          return false;
        });
        if (!isLiked) {
          await post.like.push({
            ip: req.ip,
          });
          await post.save();
        await post.populate("comments");
          return res.send(post.makeItPublick(req) );
        }
        post.like = await post.like.filter((like) => {
          like.ip != req.ip;
        });
        await post.save();
        await post.populate("comments");
        return res.send(post.makeItPublick(req) );
      } catch (e) {
        // console.log(e)
        res.status(400).send({ error: e.message });
      }
  }

}
