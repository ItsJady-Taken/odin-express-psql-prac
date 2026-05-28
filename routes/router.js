const express = require('express');
const app = express();
const controller = require('../controllers/controller');

app.use(express.urlencoded({ extended: true }));

app.get('/', controller.getUsernames);
app.get('/create', controller.createUsernameGet);
app.post('/create', controller.createUsernamePost);

module.exports = app;