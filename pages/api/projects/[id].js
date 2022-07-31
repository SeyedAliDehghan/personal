import dbConnect from "../../../util/mongoose";
import Project from "../../../models/project";

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    const { id } = req.query;
    try {
        const project = await Project.findOne({slug:id});
        if (!project) {
          return res.status(404).send({ error: "project not found!" });
        }
        await project.populate("comments");
        res.send(project.showPublicSingle(req));
      } catch (e) {
        res.status(500).send({ error: e.message });
      }
  }
  if (method === "DELETE") {
    const { id } = req.query;
    try {
        const project = await Project.findById(id);
        if (!project) {
          return res.status(404).send({ error: "no project found!" });
        }
        await project.remove()
        res.send({message:"project deleted"})
      } catch (e) {
        console.log(e)
        res.status(500).send({error:e.message});
      }
  }
}
