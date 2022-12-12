require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.NODE_PORT || 7000;
var corsOptions = {
  // origin: '*',
  origin: 'http://localhost:' + process.env.PORT,
  credentials: true,  // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database connection 
const db = require('./api/models');
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: true 
})
  .then(() => { console.log('connection successfull') })
  .catch(() => { console.log('connection Failed') })
const auth = require('./api/controllers/AuthController');
// link with route
// app.post('/api/signup', auth.signin);
require('./api/routes')(app);
// listen port 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
