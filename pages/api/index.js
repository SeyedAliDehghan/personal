import dbConnect from "../../util/mongoose";
import Project from "../../models/project";
import Setting from '../../models/setting'

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    try {
        const projects = await Project.find({}).limit(3);
        const settings=await Setting.find({})
        const setting=settings[0]
        res.send({projects,setting})
      } catch (e) {
        res.status(500).send({ error: e.message });
      }
    };
}
