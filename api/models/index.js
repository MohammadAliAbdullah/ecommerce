const dbConfig = require('../config/DBConfig');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db ={}
db.mongoose = mongoose;
db.url = `${dbConfig.CONNECTION}://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`;
db.user = require('./UserModel')(mongoose);
db.role = require('./RoleModel')(mongoose); // not pass param => momgoose
db.tag = require('./TagModel')(mongoose); // not pass param => momgoose
db.question = require('./QuestionModel')(mongoose);
db.answer = require('./AnswarModel')(mongoose);
db.vote = require('./VoteModel')(mongoose);
db.comment = require('./CommentModel')(mongoose);

module.exports = db;