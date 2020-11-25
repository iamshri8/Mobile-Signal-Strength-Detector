const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// schema for storing user data
const UserSchema = new Schema({
    username : {
        type : String,
        required : [true , "Username is required"]
    },

    email :{
        type : String,
        required : [true , "Email is required"],
        unique : true
    },

    phonenumber :{
        type : String,
        required : true
    },

    address :{
        type: String,
        required : true
    },

    city : {
        type : String,
        required : true
    },

    pincode : {
        type : String,
        required : true
    },

    password :{
        type : String,
        required : true
    },

    resetPasswordToken: {
        type : String
    },

    resetPasswordExpires: {
        type : Date
    }
});

const UserData = mongoose.model("userData", UserSchema);

module.exports = UserData;