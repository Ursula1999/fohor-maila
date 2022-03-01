const mongoose = require('mongoose');

const Note = mongoose.model("Note",{
    title:{
        type: String

    },

     message:{
        type: String
    }
})

module.exports = Note;