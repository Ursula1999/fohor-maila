const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Driver = require("../models/driverModel");
// const Admin = require("../models/adminModel");
// const addBin = require("../models/addbinModel");
// guard- verify token

module.exports.verifyUser = function(req,res,next){
    try{
    const token = req.headers.authorization.split(" ")[1];
    const udata = jwt.verify(token, "Usergrant");
    User.findOne({_id : udata.userId})
    .then(function(userData){
        // console.log(userData);
        req.userInfo = userData;
        next();
        

    }) //_id from database and ddata is from upper const and driverId is from route - const token part(firstone)

    .catch(function(e){
        res.json({error: e})
    })
}
   
catch(e){
       res.json({error : e})
   }}

    module.exports.verifyDriver = function(req,res,next){
    try{
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token);
    const ddata = jwt.verify(token, "Drivergrant");
    Driver.findById(ddata.driverId)
    
    .then(function(driverData){
        // console.log(driverData);
        req.driverInfo = driverData;
        next();
        

    }) //_id from database and ddata is from upper const and driverId is from route - const token part(firstone)

    .catch(function(e){
        res.json({error: e})
    })
    }

    catch(e){
        res.json({error : e})
    }}


// auth according to the users
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
      if(!roles.includes(req.userInfo.role)) {
        return res.json({message:"Unauthorized user"})
       };
      next();
    
  };
}


// module.exports.verifyAdmin = function(req,res,next){
//     try{
//         const token = req.headers.authorization.split(" ")[1];
//         const adata = jwt.verify(token, 'adminkey');
//         Admin.findOne({_id : adata. })

//     }
// } 