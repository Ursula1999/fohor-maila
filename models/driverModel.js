const mongoose = require ('mongoose');

const driverSchema = mongoose.Schema({
    fullName : {
        type : String
    },

    email :{
        type : String
    },
    
    phone :{
        type : String
    },

    address : {
        type : String

    },
    citizenshipNo : {
        type : String

    },

    password: {
        type : String

    },

    createdBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },

    createdAt:{
        type: Date,
        default:Date.now
    }
    
})

module.exports = mongoose.model('Driver', driverSchema);