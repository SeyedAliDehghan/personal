import nextConnect from 'next-connect';
import multer from 'multer';
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now()+'.jpg'),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    // console.log(error)
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('theFile'));

apiRoute.post((req, res) => {
    // console.log()
  res.status(200).json({ fileName:req.file.filename });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
