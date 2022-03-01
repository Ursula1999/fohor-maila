const mongoose = require("mongoose");

const complainSchema = mongoose.Schema({
    BinId :{
        type: String,
        required: true,
    },

    complain_Msg : {
        type: String,
        required: true
    },

    complain_image : {
            type: String,
            
    }
    
})

module.exports = mongoose.model('Complain', complainSchema);