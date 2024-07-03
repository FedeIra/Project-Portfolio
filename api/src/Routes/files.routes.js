// External packages:
import Boom from '@hapi/boom';
import { Router } from 'express';

// Internal packages:
import { AwsS3Service } from '../services/files/awsS3Services.js';
import { authenticateJwt } from '../middlewares/authentication.middleware.js';

const router = Router();

// Services instances:
const filesService = new AwsS3Service();

// Endpoint to upload pdf documents:
router.post('/upload', async (req, res, next) => {
  try {
    const response = await filesService.uploadFile(req.files.file);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

// Endpoint to get all documents data:
router.get('/getListFiles', authenticateJwt, async (req, res, next) => {
  try {
    const response = await filesService.getFilesData();
    res.status(200).json(response);
  } catch (error) {
    next(error);
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
      const response = await filesService.getFileData(fileName);
      res.status(200).json(response);
    } catch (error) {
      next(error);
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
    const response = await filesService.getFileUrl(fileName);
    res.status(200).json(response);
  } catch (error) {
    next(error);
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
      const response = await filesService.downloadFile(fileName);
      res.setHeader('Content-Type', 'application/pdf');
      response.pipe(res);
    } catch (error) {
      next(error);
    }
  }
);

// Endpoint to eliminate pdf:
router.delete(
  '/deleteFile/:fileName',
  authenticateJwt,
  async (req, res, next) => {
    try {
      const fileName = req.params.fileName;
      if (!fileName) {
        return res.status(400).json({ error: 'No filename provided.' });
      }
      const response = await filesService.deleteFile(fileName);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
