const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./Images')
    },
    filename : function(req,file,cb){
        cb(null,Date.now()+ file.originalname);
    }
})
// accepting png, jpeg and gif
const filter = function(req,file,cb){
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg'){
        //valid
        cb(null,true)

    }else{
        cb(null, false)

    }
}
const upload = multer({
    storage: storage,
    fileFilter: filter
})
module.exports = upload;