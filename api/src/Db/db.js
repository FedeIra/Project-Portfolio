import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

import dotenv from 'dotenv';
dotenv.config();
const URL_DB = process.env.URL_DB;

mongoose.connect(URL_DB);

const database = mongoose.connection;

export default database;
