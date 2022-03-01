const express = require("express");
const Note = require("../models/noteModel");
const router = new express.Router();
const auth = require("../auth/auth");

router.post("/admin/create/notes", auth.verifyUser, auth.authorizeRoles('admin'),function(req,res){
    const title = req.body.title;
    const message = req.body.message;

    const data = new Note({
        title:title,
        message:message
    })
    data.save()
    .then(function(){
        res.json({message:"Notes Saved"});

    })
    .catch(function(e){
        res.json({message:e})
    })
})

module.exports = router;