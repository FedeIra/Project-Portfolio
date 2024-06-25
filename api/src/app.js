import express from 'express';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './Routes/index.js';
import { boomErrorHandler } from './middlewares/error.handler.js';

const server = express();

import cors from 'cors';
import './utils/authentication/index.js';

// server.name = 'API';
server.use(cors());
server.use(express.json());

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads',
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

server.use('/', routes);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  res.status(status).send(message);
});

server.use(boomErrorHandler);

export default server;
