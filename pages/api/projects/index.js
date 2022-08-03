import dbConnect from "../../../util/mongoose";
import Project from "../../../models/project";
import slugify from "slugify";
// import Project from '../../../models/project'

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();

  if (method === "GET") {
    try {
      const projects = await Project.find({});
      if (projects.length === 0) {
        return res.status(404).send({ error: "no project found!" });
      }
      const result = [];
      const somefunction = await Promise.all(
        projects.map(async (project) => {
          await project.populate("comments");
          await result.push(project.makeItPublick(req));
          console.log(project.makeItPublick(req))
        })
      );
      res.send(result);
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  }
}
