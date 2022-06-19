import express from 'express';
import path from 'path';
import 'dotenv/config';
import bodyParser from 'body-parser';
import __dirname from './dirname.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';
import connectDb from './connect-db.js';
import authRouter from './routes/authRoutes.js';
import askQuestionRouter from './routes/askQuestionRoutes.js';
import bearerTokenMiddleware from './middleware/bearerTokenMiddleware.js';

//db connection code
connectDb(process.env.DB_CONNECTION, process.env.DB_NAME);

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bearerTokenMiddleware);

app.use('/auth', authRouter);
app.use('/ask-question', askQuestionRouter);

app.use(function (req, res) {
  res
    .status(404)
    .json({ message: 'We couldn\'t find what you were looking for 😞' });
});

app.use(function (err, req, res) {
  console.error(err.stack);
  res.status(500).json(err);
});

export default app;
