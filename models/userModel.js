const validator = require('validator');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname : {
        type: String, 
        required:[true,"Fullname is required"]
    },

    email :{
        type: String,
        required:[true,"Email is required"]
    },
    
    address : {
        type: String,
        required:[true,"address is required"]
    },

    phone : {
        type: String,
        
    },

    citizenshipNo : {
        type: String,
    },
    password : {
        type: String,
        required: [true, "Please enter password"],
        minLength: [8, "Password should be minimum 8 character"],
        select: false //if someone req the user data, it will not provide password
    },

    role: {
        type: String,
        default: 'Public',
        // enum:["Public","Driver", "Admin"]
    },
    created_date: {
        type: Date,
        default: Date.now
    },


})
module.exports = mongoose.model('User', userSchema);