import dbConnect from "../../../../util/mongoose";
import Admin from "../../../../models/admin";
import Setting from "../../../../models/setting";
// import Project from '../../../models/project'

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "GET") {
    // const settings = ;
    // console.log(Setting.find({}))
    try {
    const settings =await Setting.find({});

      res.status(200).send(settings[0]);
    } catch (e) {
        console.log(e)
      res.status(400).send(e);
    }
  }
}
