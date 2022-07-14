import dbConnect from "../../../util/mongoose";
import Message from "../../../models/message";

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "DELETE") {
    const { id } = req.query;
    try {
      const message = await Message.findByIdAndDelete(id);
      if (!message) {
        return res.status(404).send();
      }
      res.send(message);
    } catch (e) {
      res.status(500).send({error:e.message});
    }
  }
  if (method === "GET") {
    const { id } = req.query;
    try {
        const message = await Message.findById(id);
        if (!message) {
          return res.status(404).send();
        }
        res.send(message);
      } catch (e) {
        res.status(500).send(e);
      }
  }
}
