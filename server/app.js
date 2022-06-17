import express from 'express';
import path from 'path';
import 'dotenv/config';
import multer from 'multer';
import fs from 'fs';

import __dirname from './dirname.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';
import connectDb from './connect-db.js';
import UserModel from './model/UserModel.js';

import usersRouter from './routes/users.js';

//db connection code
connectDb(process.env.DB_CONNECTION, process.env.DB_NAME);

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// --- Upload Directory
if (!fs.existsSync('/uploads')) {
  fs.mkdirSync('/uploads');
}
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

var upload = multer({ storage: storage });

app.use('/users', usersRouter);

app.post('/register', upload.single('image'), (req, res, next) => {
  var obj = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    img: {
      data: fs.readFileSync(
        path.join(__dirname + '/uploads/' + req.file.filename)
      ),
      contentType: 'image',
    },
  };
  UserModel.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();
      res.json(obj);
    }
  });
});

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

export default app;
