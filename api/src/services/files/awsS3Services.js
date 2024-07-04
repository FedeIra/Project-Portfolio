// External imports:
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  ListObjectsV2Command,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import fs from 'fs';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { promisify } from 'util';
import Boom from '@hapi/boom';

// Internal imports:
import config from '../../config/config.js';

// Promisify unlink function:
const unlinkAsync = promisify(fs.unlink);

// Aws S3 Service class:
class AwsS3Service {
  constructor() {
    this.awsClient = new S3Client({
      region: config.aws.bucket_region,
      credentials: {
        accessKeyId: config.aws.access_key,
        secretAccessKey: config.aws.secret_key,
      },
    });
  }

  // Service to upload a file to S3:
  async uploadFile(file) {
    let stream;
    try {
      stream = fs.createReadStream(file.tempFilePath);

      const uploadParams = {
        Bucket: config.aws.bucket_name,
        Key: file.name,
        Body: stream,
      };

      const command = new PutObjectCommand(uploadParams);

      const awsResponse = await this.awsClient.send(command);

      await unlinkAsync(file.tempFilePath);

      return awsResponse;
    } catch (error) {
      throw Boom.internal(`Error uploading file: ${error.message}.`);
    } finally {
      if (stream) {
        stream.destroy();
      }
    }
  }

  // Service to get all files from S3:
  async getFilesData() {
    try {
      const listParams = {
        Bucket: config.aws.bucket_name,
      };

      const command = new ListObjectsV2Command(listParams);

      const awsResponse = await this.awsClient.send(command);

      const files = awsResponse.Contents.map((file) => ({
        key: file.Key,
        size: file.Size,
        lastModified: file.LastModified,
        storageClass: file.StorageClass,
      }));

      return files;
    } catch (error) {
      throw Boom.internal(`Error getting files: ${error.message}.`);
    }
  }

  // Service to get document data from S3:
  async getFileData(fileName) {
    try {
      const getFilesParams = {
        Bucket: config.aws.bucket_name,
        Key: fileName,
      };

      const command = new GetObjectCommand(getFilesParams);

      const awsResponse = await this.awsClient.send(command);

      return awsResponse.$metadata;
    } catch (error) {
      throw Boom.internal(`Error getting file data: : ${error.message}.`);
    }
  }

  // Service to get document url from S3:
  async getFileUrl(fileName) {
    try {
      const getFilesParams = {
        Bucket: config.aws.bucket_name,
        Key: fileName,
      };

      const command = new GetObjectCommand(getFilesParams);

      const fileURL = await getSignedUrl(this.awsClient, command, {
        expiresIn: 600,
      });

      return {
        url: fileURL,
      };
    } catch (error) {
      throw Boom.internal(`Error getting file url: ${error.message}.`);
    }
  }

  // Service to download pdf from S3:
  async downloadFile(fileName) {
    try {
      const getFilesParams = {
        Bucket: config.aws.bucket_name,
        Key: fileName,
      };
      const command = new GetObjectCommand(getFilesParams);

      const awsResponse = await this.awsClient.send(command);

      const fileStream = awsResponse.Body;

      return fileStream;
    } catch (error) {
      throw Boom.internal(`Error downloading file: ${error.message}.`);
    }
  }

  // Service to eliminate a file from S3:
  async deleteFile(fileName) {
    try {
      const deleteParams = {
        Bucket: config.aws.bucket_name,
        Key: fileName,
      };

      const command = new DeleteObjectCommand(deleteParams);

      const awsResponse = await this.awsClient.send(command);

      return awsResponse;
    } catch (error) {
      throw Boom.internal(`Error deleting file: ${error.message}.`);
    }
  }
}

export { AwsS3Service };
