var express = require('express');
var router = express.Router();
var multer  = require('multer');
var storage =   multer.diskStorage({  
  destination: function (req, file, callback) {  
    callback(null, './uploads');  
  },  
  filename: function (req, file, callback) {  
    callback(null, file.originalname);  
  }  
});  
var upload = multer({ storage : storage}).single('uploadFile');  
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/profile', function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
  upload(req,res,function(err) {  
    if(err) {  
        return res.end("Error uploading file.");  
    }  
});  
  res.send('respond with a resource');
});
 
module.exports = router;
