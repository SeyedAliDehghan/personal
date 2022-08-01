import dbConnect from "../../../../util/mongoose";
import Setting from "../../../../models/setting";

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const settings = await Setting.find({});
      const setting = settings[0];

      res.send(setting.technologies);
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  }
  if (method === "POST") {
    try {
      const settings = await Setting.findOne({});
      await settings.technologies.push(req.body);
      await settings.save();
      res.send(settings.technologies);
    } catch (e) {
      console.log(e);
      res.status(500).send({ error: e.message });
    }
  }
  if (method === "DELETE") {
    try {
      const settings = await Setting.findOne({});
      settings.technologies=await settings.technologies.filter(tech=>tech._id!=req.body.id);
      await settings.save();
      res.send(settings.technologies);
    } catch (e) {
      console.log(e);
      res.status(500).send({ error: e.message });
    }
  }
}
