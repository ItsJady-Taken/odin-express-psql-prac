const express = require('express');
const app = express();
const controller = require('../controllers/controller');
const path = require('path');
const { title } = require('process');

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../template'));


app.get('/', controller.getUsernames);
app.get('/create', controller.createUsernameGet);
app.post('/create', controller.createUsernamePost);

app.listen(3000, () => console.log("Server running on port 3000"));
module.exports = app;