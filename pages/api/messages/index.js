import dbConnect from "../../../util/mongoose";
import Message from "../../../models/message";

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "POST") {
    const message = new Message(req.body);
    try {
      await message.save();
      res.status(201).send(message);
    } catch (e) {
      res.status(400).send({error:e.message});
    }
  }
  if (method === "GET") {
    try {
        const messages = await Message.find({});
        if (messages.length===0) {
          return res.status(404).send({error:"no message found!"})
        }
        res.send(messages);
      } catch (e) {
        res.status(500).send({error:e.message});
      }
  }
}
