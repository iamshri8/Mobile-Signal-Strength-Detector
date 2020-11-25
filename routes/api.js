const express = require('express');
const router = express.Router();
const UserData = require('../model/userData');
const NetworkData = require('../model/networkData');
const nodemailer = require("nodemailer");
const crypto = require("crypto");

// login
router.get('/login',function(req,res,next){

    UserData.find({email : req.query.email , password : req.query.password}).then(function(userData){

        //save email id in session variable
        req.session.email = userData[0].email;
        res.send(userData);

    });

});

// get user profile
router.get('/profile', function (req, res, next) {

    UserData.find({email : req.session.email}).then(function (userData) {

        res.send(userData);

    });

});

// get data for displaying in charts
router.post('/getChart', function(req, res, next) {

    NetworkData.find({networkName : req.body.networkName}).then(function (data) {

        res.send(data);

    });

});

// sign up
router.post('/signup',function(req,res,next){

    UserData.create(req.body).then(function(userData){

        res.send(userData);

    });

});

// post data to database from ANDROID APP
router.post('/register', function(req, res, next) {

    NetworkData.create(req.body).then(function (data) {

        res.send(data);

    });

});

// send mail on submitting email id in forgotpassword
router.post('/forgotpassword', function (req, res, next) {

    let token = '';

    crypto.randomBytes(20, function (err, buf) {
        token = buf.toString('hex');
    });

    UserData.findOne(req.body).then(function(userData){

        userData.resetPasswordToken = token;
        userData.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        userData.save();

        const smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            auth : {
                user : 'rathna211994@gmail.com',
                pass : 'Ratz@12345'
            }
        });

        const mailOptions = {

            to: userData.email,
            from: 'rathna211994@gmail.com',
            subject: 'Password Reset',
            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://localhost:3000/resetpassword?resetPasswordToken=' + userData.resetPasswordToken + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'

        };

        smtpTransport.sendMail(mailOptions, function (err) {

            res.send('success');

        });

    });

});

// confirm resetPasswordToken from database
router.get('/resetpassword', function(req, res) {

    UserData.findOne({ resetPasswordToken: req.query.resetPasswordToken }, function(userData) {

        res.render('resetpassword', {token: req.params.token});

    });

});

// save new passoword
router.post('/resetpassword',function (req,  res ) {

    UserData.findOne({ resetPasswordToken : req.body.resetPasswordToken }).then(function (userData) {

        userData.password = req.body.newpassword;
        userData.save();
        res.send(userData);

    });

});

module.exports = router;
