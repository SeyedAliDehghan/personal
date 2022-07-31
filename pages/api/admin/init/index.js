import dbConnect from "../../../../util/mongoose";
import Admin from "../../../../models/admin";
import Setting from "../../../../models/setting";
// import Project from '../../../models/project'

export default async function handler(req, res) {
  const { method, cookies } = req;
  dbConnect();
  if (method === "POST") {
    const technologies = [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "TailWind" },
      { name: "Bootstrap" },
      { name: "Figma" },
      { name: "Photoshop" },
    ];
    const adminExist = await Admin.find({});
    if (adminExist.length != 0) {
      return res.status(400).send({ message: "admin exist" });
    }
    const admin = new Admin({
      name: "Seyed Ali Dehghan",
      email: "admin@gmail.com",
      password: "pass123456",
    });
    const setting = new Setting({
      logo: "logo.png",
      description:
        "I’m a Front-End developer specializing in building single page web applications.",
      social: [
        {
          title: "instagram",
          fontClass: "fa-brands fa-instagram",
          url: "https://instagram.com/aliw.d",
        },
      ],
      technologies
    });
    try {
      await admin.save();
      await setting.save();
      res.status(201).send({ message: "admin created" });
    } catch (e) {
      res.status(400).send(e);
    }
  }
}
