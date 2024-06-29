import mongoose from 'mongoose';
import config from '../../config.js';

mongoose.set('strictQuery', false);

const URL_DB = config.url_database;

mongoose.connect(URL_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

export default database;
