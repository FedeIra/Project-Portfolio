// External imports:
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';
import fs from 'fs';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// Internal imports:
import config from '../../config/config.js';

// S3 client service:
const awsClient = new S3Client({
  region: config.aws.bucket_region,
  credentials: {
    accessKeyId: config.aws.access_key,
    secretAccessKey: config.aws.secret_key,
  },
});

// Service to upload a file to S3:
export const uploadFile = async (file) => {
  const stream = fs.createReadStream(file.tempFilePath);
  const uploadParams = {
    Bucket: config.aws.bucket_name,
    Key: file.name,
    Body: stream,
  };
  const command = new PutObjectCommand(uploadParams);

  const awsResponse = await awsClient.send(command);

  fs.unlink(file.tempFilePath, (err) => {
    if (err) {
      return awsResponse;
    }
  });

  return awsResponse;
};

// Service to get all files from S3:
export const getFilesData = async () => {
  const listParams = {
    Bucket: config.aws.bucket_name,
  };

  try {
    const command = new ListObjectsV2Command(listParams);

    const awsResponse = await awsClient.send(command);

    const files = awsResponse.Contents.map((file) => ({
      key: file.Key,
      size: file.Size,
      lastModified: file.LastModified,
      storageClass: file.StorageClass,
    }));

    return files;
  } catch (error) {
    return error;
  }
};

// Service to get document data from S3:
export const getFileData = async (fileName) => {
  const getFilesParams = {
    Bucket: config.aws.bucket_name,
    Key: fileName,
  };

  const command = new GetObjectCommand(getFilesParams);

  const awsResponse = await awsClient.send(command);

  return awsResponse.$metadata;
};

// Service to get document url from S3:
export const getFileUrl = async (fileName) => {
  const getFilesParams = {
    Bucket: config.aws.bucket_name,
    Key: fileName,
  };

  const command = new GetObjectCommand(getFilesParams);

  const fileURL = await getSignedUrl(awsClient, command, { expiresIn: 600 });

  return {
    url: fileURL,
  };
};

// Service to download pdf from S3:
export const downloadFile = async (fileName) => {
  const getFilesParams = {
    Bucket: config.aws.bucket_name,
    Key: fileName,
  };
  const command = new GetObjectCommand(getFilesParams);

  const awsResponse = await awsClient.send(command);

  const fileStream = awsResponse.Body;

  return fileStream;
};