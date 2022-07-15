import dbConnect from '../../../../util/mongoose'
import Admin from '../../../../models/admin'

export default async function handler(req, res) {
    const { method, cookies } = req;
    dbConnect();
    if (method === "POST") {
        try {
            const admin = await Admin.findByCredentials(
              req.body.email,
              req.body.password
            );
            res.send({ admin});
            
            // const token = await admin.generateAuthToken();
            // res.send({ admin, token });
            // res.send({ user:user.getPublicProfile(), token });
          } catch (e) {
            // console.log(e)
            res.status(400).send({ error: e.message });
          }
    }
}