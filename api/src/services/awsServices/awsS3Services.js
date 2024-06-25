// External imports:
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';
import fs from 'fs';

// Internal imports:
import config from '../../../config.js';

// S3 client service:
const awsClient = new S3Client({
  region: config.aws_bucket_region,
  credentials: {
    accessKeyId: config.aws_access_key,
    secretAccessKey: config.aws_secret_key,
  },
});

// Service to upload a file to S3:
export const uploadFile = async (file) => {
  console.log(config.aws_bucket_name);
  const stream = fs.createReadStream(file.tempFilePath);
  const uploadParams = {
    Bucket: config.aws_bucket_name,
    Key: file.name,
    Body: stream,
  };

  const command = new PutObjectCommand(uploadParams);

  const awsResponse = await awsClient.send(command);

  return awsResponse;
};

// Service to get all files from S3:
export const getFiles = async () => {
  const listParams = {
    Bucket: config.aws_bucket_name,
  };

  try {
    const command = new ListObjectsV2Command(listParams);

    const awsResponse = await awsClient.send(command);

    console.log('🚀 ~ listFiles ~ awsResponse:', awsResponse);

    const files = awsResponse.Contents.map((file) => ({
      key: file.Key,
      size: file.Size,
      lastModified: file.LastModified,
      storageClass: file.StorageClass,
    }));

    return files;
  } catch (error) {
    throw error;
  }
};

// Service to get a file from S3:
export const getFile = async (key) => {
  const getFilesParams = {
    Bucket: config.aws_bucket_name,
    Key: key,
  };

  const command = new GetObjectCommand(getFilesParams);

  const awsResponse = await awsClient.send(command);

  const fileStream = awsResponse.Body;

  return fileStream;
};