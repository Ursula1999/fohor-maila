const mongoose = require('mongoose');

const addBin = mongoose.Schema({
    city :{
        type: String,
        required: true
    },

    streetName : {
        type: String,
        required: true
        
    },

    BinId : {
        type: String,
        
        required: true
    },

    cyclePeriod : {
        type: String,
        
        required: true

    },

    driverEmail : {
        type: String,
        required: true
    },


    create_date : {
        type: Date,
        default: Date.now,
        
        
    },

    routeDescribe : {
        type: String,

    }

    // admintype : {
    //     type: mongoose.Schema.ObjectId,
    //     ref : 'Admin'
    // }

   

})

module.exports = mongoose.model('Bin', addBin);