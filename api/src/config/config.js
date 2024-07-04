// Import external packages:
import 'dotenv/config';
import Joi from 'joi';

const envVarsSchema = Joi.object({
  URL_DB: Joi.string().required(),
  PORT: Joi.number().default(3001),
  EMAIL_JS_SERVICEID: Joi.string().required(),
  EMAIL_JS_TEMPLATEID: Joi.string().required(),
  EMAIL_JS_PUBLICKEY: Joi.string().required(),
  EMAIL_JS_PRIVATEKEY: Joi.string().required(),
  AWS_BUCKET_NAME: Joi.string().required(),
  AWS_BUCKET_REGION: Joi.string().required(),
  AWS_ACCESS_KEY: Joi.string().required(),
  AWS_SECRET_KEY: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
})
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);

if (error) {
  throw new Error(`Config .env validation error: ${error.message}`);
}

// Environment variables configuration object:
const config = {
  url_database: envVars.URL_DB,
  port: envVars.PORT,
  email_js: {
    serviceid: envVars.EMAIL_JS_SERVICEID,
    templateid: envVars.EMAIL_JS_TEMPLATEID,
    publickey: envVars.EMAIL_JS_PUBLICKEY,
    privatekey: envVars.EMAIL_JS_PRIVATEKEY,
  },
  aws: {
    bucket_name: envVars.AWS_BUCKET_NAME,
    bucket_region: envVars.AWS_BUCKET_REGION,
    access_key: envVars.AWS_ACCESS_KEY,
    secret_key: envVars.AWS_SECRET_KEY,
  },
  jwt_secret: envVars.JWT_SECRET,
};

export default config;
