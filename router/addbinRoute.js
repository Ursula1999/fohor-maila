const { Router } = require('express');
const express = require('express');
const router = new express.Router();
const driver = require('../models/driverModel');
const addBin = require('../models/addbinModel');
const auth = require('../auth/auth');
const res = require('express/lib/response');

//to insert new bin
router.post("/Admin/newbin/create", auth.verifyUser,auth.authorizeRoles("admin"), function(req,res){
        const city = req.body.city;
        const streetName = req.body.streetName;
        const BinId = req.body.BinId;
        const cyclePeriod = req.body.cyclePeriod;
        const routeDescribe = req.body.routeDescribe;
    driver.findOne({email: req.body.email})
    
    .then(function(driverData){
        // console.log(driverData)
        if(driverData === null){
            // console.log("ij");
            res.status(400);
            return res.json({message : "Registered driver email only!"});
            
        };
        
        const data = new addBin({
            city: city,
            streetName: streetName,
            BinId: BinId,
            cyclePeriod: cyclePeriod,
            driverEmail: req.body.email,
            routeDescribe: routeDescribe
      })
    
    data.save()
    .then(function(){
        res.json({message:"New bin created!", success : true});
    })
    .catch(function(){
        res.json({message:"Something went wrong!"})
    });
})
})

router.put("/Admin/newbin/update", auth.verifyUser, auth.authorizeRoles("admin"), function(req, res){
    const BinId = req.body.binId
    const city = req.body.city
    const cyclePeriod = req.body.cyclePeriod
    const streetName = req.body.streetName
    const routeDescribe = req.body.routeDescribe;
    console.log(BinId);
    console.log(city);
    addBin.updateOne({BinId : BinId},
        {city:city,
         cyclePeriod:cyclePeriod,
         streetName:streetName,
         routeDescribe:routeDescribe })
    .then(function(){
        res.json({message : "Bin is updated"})
    })
    .catch(function(){
        res.status(400);
        res.json({msg:"Something went wrong"})

    });
    })
    
router.get('/Admin/newbin/view',auth.verifyUser, auth.authorizeRoles("admin"), function(req,res){
    addBin.find()
    .then(function(addBinList){
        if(addBinList === null){
            res.status(400);
            return res.json({message:"Bin doesnt exist"});

        }
        res.json({sucess: true, 
            addBinList: addBinList})
    })
})   

router.get('/Admin/UpdateBin/view/:BinId',auth.verifyUser, auth.authorizeRoles("admin"), function(req,res){
    const BinId = req.params.BinId
    addBin.findOne({BinId:BinId})
    .then(function(resultu){
        // console.log(resultu)
        res.json(resultu);
      
    })
    .catch(function(){
        res.json({message:"Something went wrong"})
    })
})   

router.delete("/Admin/newbin/delete/:BinId", auth.verifyUser, auth.authorizeRoles("admin"), function(req,res){
    addBin.findOne({BinId:req.params.BinId})
    .then(function(Bindata){
        if(Bindata === null){
            res.status(400);
            return res.json({message:"  Invalid Bin"})
        }
        Bindata.remove();
        res.json({message:"Bin is deleted"})
    })
    .catch(function(){
        res.status(400);
        res.json({message:"Something went wrong"})
    })
})

module.exports = router;

