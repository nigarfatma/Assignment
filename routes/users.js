var express = require('express');
var router = express.Router();
const multer  = require('multer')
const authController=require("../controller/authController");
const userController=require("../controller/userController");

// MULTER
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
})
const fileFilter=(req, file, cb)=>{
if(file.mimetype==='image/jpeg' || file.mimetype==='image/jpg' || file.mimetype==='image/png'){
cb(null,true);
}else{
  cb(null,false)
}
}
const upload = multer({ 
  storage: storage,
  limits:{
    fileSize:1024 *1024 *5
  },
  fileFilter:fileFilter
})



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// IMAGE UPLOAD

//  API OF signup OF USER
router.post('/user/signup',authController.signup);
// API OF LOGIN OF USER
router.post('/user/login',authController.login);

// API OF the USER
router.get('/user',userController.userList);
router.post('/user',upload.single('profile'),userController.userAdd);
router.put('/user',userController.userEdit);


module.exports = router;
