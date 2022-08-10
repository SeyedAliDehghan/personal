import dbConnect from "../../../../util/mongoose";
import Project from "../../../../models/project";
export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    const { id } = req.query;
    try {
      const project = await Project.findByIdAndDelete(id);
      if (!project) {
        return res.status(404).send();
      }
      res.send(project);
    } catch (e) {
      console.log(e)
      res.status(500).send({error:e.message});
    }
  }
}
