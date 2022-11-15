const dbConfig = require('../config/DBConfig');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db ={}
db.mongoose = mongoose;
db.url = `${dbConfig.CONNECTION}://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;
db.user = require('./UserModel')(mongoose);
db.role = require('./RoleModel')(mongoose); // not pass param => momgoose

module.exports = db;