const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./db');
const seedBlogs = require('./utils/seedBlogs');

const seed = async () => {
  await connectDB();
  await seedBlogs();
  mongoose.disconnect();
};

seed();
