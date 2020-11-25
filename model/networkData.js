const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for storing signal strength data
const NetworkDataSchema = new Schema({

    networkName : {
        type : String,
        required : [true, 'Network name required']
    },

    signalStrength : {
        type : String,
        required : [true, 'Signal strength required']
    },

    latitude : {
        type : String,
    },

    longitude : {
        type : String,
    }

});

const NetworkData = mongoose.model('networkData', NetworkDataSchema);


module.exports = NetworkData;