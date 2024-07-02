// External packages:
import Boom from '@hapi/boom';
import { Router } from 'express';

// Internal packages:
import {
  uploadFile,
  getFilesData,
  getFileData,
  downloadFile,
  getFileUrl,
} from '../services/files/awsS3Services.js';
import { authenticateJwt } from '../middlewares/authentication.handler.js';

const router = Router();

// Endpoint to upload pdf documents:
router.post('/upload', async (req, res, next) => {
  try {
    const response = await uploadFile(req.files.file);
    res.status(200).json(response);
  } catch (error) {
    next(Boom.internal(error.message));
  }
});

// Endpoint to get all documents data:
router.get('/getListFiles', authenticateJwt, async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(400).json({ error: 'No filename provided.' });
    }
    const response = await getFilesData();
    res.status(200).json(response);
  } catch (error) {
    next(Boom.internal(error.message));
  }
});

// Endpoint to get document data:
router.get(
  '/getFileData/:fileName',
  authenticateJwt,
  async (req, res, next) => {
    try {
      const fileName = req.params.fileName;
      if (!fileName) {
        return res.status(400).json({ error: 'No filename provided.' });
      }
      const response = await getFileData(fileName);
      res.status(200).json(response);
    } catch (error) {
      next(Boom.internal(error.message));
    }
  }
);

// Endpoint to get document url:
router.get('/getFileUrl/:fileName', authenticateJwt, async (req, res, next) => {
  try {
    const fileName = req.params.fileName;
    if (!fileName) {
      return res.status(400).json({ error: 'No filename provided.' });
    }
    const response = await getFileUrl(fileName);
    res.status(200).json(response);
  } catch (error) {
    next(Boom.internal(error.message));
  }
});

// Endpoint to download pdf:
router.get(
  '/downloadFile/:fileName',
  authenticateJwt,
  async (req, res, next) => {
    try {
      const { fileName } = req.params;

      if (!fileName) {
        return res.status(400).json({ error: 'No filename provided.' });
      }
      const response = await downloadFile(fileName);
      res.setHeader('Content-Type', 'application/pdf');
      response.pipe(res);
    } catch (error) {
      next(Boom.internal(error.message));
    }
  }
);

export default router;
