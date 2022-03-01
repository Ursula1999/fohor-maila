const mongoose = require('mongoose');

const Admin = mongoose.model("Admin",{
    email:{
        type: String

    },

    password :{
        type: String
    }
})

module.exports = Admin;