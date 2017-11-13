const SendGrid = require ('sendgrid')(process.env.SEND_GRID_API_KEY);
const nodeMailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
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

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/mail/:to/:msg', async function (req, res) {

    const to = req.params.to;
    const msg = req.params.msg;

    const options = { auth: {api_key: process.env.SEND_GRID_API_KEY}};

    const mail = {
        to: to,
        from: "iam@cool.boy",
        subject: "Read this",
        text: msg
    };
    try {
        const mailer = await nodeMailer.createTransport(sgTransport(options));

        await mailer.sendMail(mail);
    } catch (e) {
        return res.send('Something wrong');
    }


    res.send('Check your emailbox');
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