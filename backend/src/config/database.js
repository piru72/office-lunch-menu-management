// configuration for database connection
const mongoose = require('mongoose'); 
const dotEnv = require('dotenv');
dotEnv.config();
const uri = process.env.MONGODB_URI;

const initDB = () => { 
  mongoose.connect(uri, { dbName: process.env.DB_NAME});
  mongoose.connection.once('open', () => { 
    console.log('connected to database'); 
  }); 
  
  mongoose.connection.on('error', console.error); 
} 
module.exports = initDB;