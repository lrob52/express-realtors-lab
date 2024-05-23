const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const apartmentsRouter = require('./routes/apartments');

const PORT = process.env.PORT || 3000;
const app = express();


app.use(cors());
app.use(logger('dev'));



app.get('/', (req, res) => {
    res.send("welcome!");
  });
  


app.listen(PORT, function() {
    console.log('Server is running, girl!');
})