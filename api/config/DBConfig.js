require('dotenv').config();
module.exports = {
    CONNECTION: process.env.DB_CONNECTION,
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    DB: process.env.DB_DATABASE,
};