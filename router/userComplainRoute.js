const express = require("express");
const router = new express.Router();
const User = require("../models/userModel");
const Complain =  require("../models/user_complainModel");
const auth = require("../auth/auth");
const upload = require("../uploads/file");
const addBin = require("../models/addbinModel");


// router.post('/user/complaint',auth.verifyUser, upload.single("complain_pic"), function(req,res){
//     if(req.file == undefined){
//         return res.json({msg:"invalid"})
//     }
//     const BinId = req.body.BinId;
//     addBin.findOne({BinId:BinId})
//     .then(function(BinInfo){
//         if(BinInfo === null){
//             res.status(400);
//             return res.json({message : " Bin doesnt exist"})
//         }
//         const complain_Msg = req.body.complain_Msg;
//         const data = new Complain({
//             BinId = BinId,
//             complain_Msg = complain_Msg,
//             complain_image = req.file.filename,
            
//         })

//         data.save()
//         .then(function(){
//             res.json({message:"Your complain is submited"});
//         })
//         .catch(function(e){
//             res.status(400);
//             res.json(e)
//         })
        
         
    
//     })

// })

module.exports = router;
