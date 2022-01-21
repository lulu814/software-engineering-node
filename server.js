const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tuit-db')

const PORT = 4000;
app.listen(PORT);
