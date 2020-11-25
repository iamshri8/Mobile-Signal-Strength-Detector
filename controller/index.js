import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';
const session = require('client-sessions');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let app = express();

//session configuration
app.use(session({
    cookieName: 'session',
    secret: 'random_string_goes_here',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000
}));

//connection to mLab
mongoose.connect('mongodb://root:root@ds235328.mlab.com:35328/networkdata');
mongoose.Promise = global.Promise;

app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
const router = require('../routes/api');
// route to api.js
app.use('/api', router);

app.get('/*' , (req,res) => {

    //route to index.html
    res.sendFile(path.join(__dirname , './index.html'));

});

//port for server to listen
app.listen(process.env.port || 3000);
