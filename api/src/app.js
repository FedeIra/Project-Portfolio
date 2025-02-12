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

const allowedOrigins = [
  'http://localhost:3000',
  'https://project-portfolio-production-a234.up.railway.app',
];

// CORS configuration:
server.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  })
);

// General middlewares:
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

// Authentication middleware:
server.use(passport.initialize());

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
