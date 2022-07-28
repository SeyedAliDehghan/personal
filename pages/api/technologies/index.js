import dbConnect from "../../../util/mongoose";
import Setting from "../../../models/setting";

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const settings = await Setting.find({});
      const setting = settings[0];

      res.send(setting.technologies)
    } catch (e) {
      console.log(e);
      res.status(500).send({ error: e.message });
    }
  }
}
