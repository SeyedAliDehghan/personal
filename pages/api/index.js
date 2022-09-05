import dbConnect from "../../util/mongoose";
import Project from "../../models/project";
import Setting from "../../models/setting";
import Post from '../../models/post'
export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const projects = await Project.find({}).sort({createdAt:'desc'}).limit(3);
      const posts = await Post.find({}).sort({createdAt:'desc'}).limit(3);
      const postResult = [];
      const someFunction = await Promise.all(
        posts.map(async (post) => {
          await post.populate("comments");
          await postResult.push(post.makeItPublick(req));
        })
      );
      const settings = await Setting.find({});
      const setting = settings[0];
      res.send({ projects,posts:postResult,setting });
    } catch (e) {
      console.log(e);
      res.status(500).send({ error: e.message });
    }
  }
}
