
const user=require("../Model/user")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt=10;
const mysecret="mysecret";
// SIGNUP OF USER
exports.signup=async(req,res,next)=>{
  const {username,email,dob,password}=req.body;
  const isExist=await user.findOne({email:email});
  if(!isExist){
  bcrypt.genSalt(salt,async function(err, salt) {
    bcrypt.hash(password, salt, async function(err, hash) {
      const objAdd={
        username:username,
        email:email,
        password:hash,
        dob:dob,
        createdOn:new Date(),
        createsBy:null,
        updatedOn:new Date(),
        status:"N", 
    }
       const createRespose=await user.create(objAdd);
       console.log(createRespose);
        res.send({ success: 'User Added successfully' });
    });
});
  }else{
    res.send({ error: 'user already exist' });
  }

}

//LOGIN OF USER
exports.login=async(req,res,next)=>{

    const {email,password}=req.body
    const isExist=await user.findOne({email:email});
    if(isExist){
      bcrypt.compare(password, isExist.password, async function(err, response) {
        // res === true
        if(response){
        const token=await  jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: isExist._id
          }, mysecret)
          console.log("token-->",token);
          res.send({ success: 'login success',token: token});
         
         
        }else{
          res.send({ error: 'password not match' });
        }
    });
    }else{
      res.send({ error: 'user not found' });
    }
   
  }
