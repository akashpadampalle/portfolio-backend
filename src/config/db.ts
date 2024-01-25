import mongoose from "mongoose";

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL!);

const db = mongoose.connection;

db.on('error', () => console.log('db error'));

db.once('open', () => console.log('db connected'));

export default db;