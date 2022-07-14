import dbConnect from "../../../../util/mongoose";
import Comment from "../../../../models/comment";
import Project from '../../../../models/project'

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
      const project = await Project.findById(post);
      if (!project) {
        return res.status(404).send();
      }
      const projectComment = await Comment({
        ...req.body,
        postTitle: project.title,
      });
      await projectComment.save();
      return res.status(201).send(projectComment);
    } catch (e) {
      console.log(e);
      res.status(400).send({ error: e.message });
    }
  }
}
