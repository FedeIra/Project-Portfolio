// External packages:
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fileUpload from 'express-fileupload';
import cors from 'cors';

// Internal packages:
import routes from './routes/index.js';
import {
  boomErrorHandler,
  genericErrorHandler,
} from './middlewares/error.middleware.js';
import passport from './middlewares/passport.middleware.js';

const server = express();

// General middlewares:
server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

// Authentication middleware:
server.use(passport.initialize());

// CORS configuration:
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

// Middleware for handling file uploads:
server.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads',
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

// Routes:
server.use('/', routes);

// Error handling:
server.use(boomErrorHandler);
server.use(genericErrorHandler);

export default server;
