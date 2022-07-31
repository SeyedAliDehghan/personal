import dbConnect from "../../util/mongoose";
import Project from "../../models/project";
import Setting from "../../models/setting";

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const projects = await Project.find({}).sort({createdAt:'desc'}).limit(3);
      const projectRresult = [];
      const someFunction = await Promise.all(
        projects.map(async (project) => {
          await project.populate("comments");
          await projectRresult.push(project.makeItPublick(req));
        })
      );
      const settings = await Setting.find({});
      const setting = settings[0];
      res.send({ projects:projectRresult, setting });
    } catch (e) {
      console.log(e);
      res.status(500).send({ error: e.message });
    }
  }
}
