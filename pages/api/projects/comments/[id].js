import dbConnect from "../../../../util/mongoose";
import Comment from "../../../../models/comment";
import Project from "../../../../models/project";

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    const { id } = req.query;
    try {
      const project = await Project.findById(id);
      if (!project) {
        return res.status(404).send();
      }
      await project.populate({ path: "comments", select: "-email -_id" });
      if (project.comments.length === 0) {
        return res.status(404).send();
      }
      res.send(project.comments);
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
