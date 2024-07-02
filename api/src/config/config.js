// Import external packages:
import 'dotenv/config';

// Environment variables configuration object:
const config = {
  url_database: process.env.URL_DB,
  port: process.env.PORT,
  email_js_serviceid: process.env.EMAIL_JS_SERVICEID,
  email_js_templateid: process.env.EMAIL_JS_TEMPLATEID,
  email_js_publickey: process.env.EMAIL_JS_PUBLICKEY,
  email_js_privatekey: process.env.EMAIL_JS_PRIVATEKEY,
  aws_bucket_name: process.env.AWS_BUCKET_NAME,
  aws_bucket_region: process.env.AWS_BUCKET_REGION,
  aws_access_key: process.env.AWS_ACCESS_KEY,
  aws_secret_key: process.env.AWS_SECRET_KEY,
  jwt_secret: process.env.JWT_SECRET,
};

export default config;
