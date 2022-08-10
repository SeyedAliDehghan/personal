import dbConnect from "../../../../util/mongoose";
import Project from "../../../../models/project";
import slugify from "slugify";

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "POST") {
    const project = new Project({...req.body,slug:slugify(req.body.title)});
    try {
      await project.save();
      res.status(201).send(project);
    } catch (e) {
      // console.log(e);
      res.status(400).send({ error: e.message });
    }
  }
}
