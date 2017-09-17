const express = require ('express');
const favicon = require ('serve-favicon');
const path = require ('path');
const config = require('./config');
const app = express();


// view engine setup
app.set('views', path.join(__dirname, '../view'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.use(express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public','imgs','favicon.ico')));

app.get('/', function (req, res, next) {
    next();
});

app.use(function (req, res) {
    res.render('index');
});

// Error handler
// app.use(function (req, res, next) {
//     res.status(404)
//         .send('<h1 align="center">Not Found 404</h1>')
//         .render('index');
// });

app.listen(config.port, function () {
    console.log('Server start on port ' + config.port);
});