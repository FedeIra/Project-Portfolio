// External packages:
import mongoose from 'mongoose';

// Internal packages:
import config from '../config/config.js';

const URL_DB = config.url_database;

mongoose.set('strictQuery', false);

// Connect to the database:
mongoose.connect(URL_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

export default database;
