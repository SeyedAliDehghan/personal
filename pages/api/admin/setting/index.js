import dbConnect from "../../../../util/mongoose";
import Admin from "../../../../models/admin";
import Setting from "../../../../models/setting";
// import Project from '../../../models/project'

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const settings = await Setting.find({});

      res.status(200).send(settings[0]);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  }
  if (method === "POST") {
    try {
      const settings = await Setting.findOne({});
      settings.description =await req.body.description;
      await settings.save()
      res.status(200).send(settings);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  }
}
