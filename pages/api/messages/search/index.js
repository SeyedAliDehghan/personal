import dbConnect from "../../../../util/mongoose";
import Message from "../../../../models/message";

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "POST") {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({ error: "one parametr required" });
    }
    const validSearchOptions = ["name", "email", "phone", "text"];
    const searchOptions = Object.keys(req.body);
    const isValidOperation = searchOptions.every((update) =>
      validSearchOptions.includes(update)
    );
    if (!isValidOperation) {
      return res.status(400).send({ error: "invalid updates" });
    }
    try {
      const message = await Message.find(req.body);
      if (message.length === 0) {
        return res.status(404).send();
      }
      res.send(message);
    } catch (e) {
      res.status(400).send(e);
    }
  }
}
