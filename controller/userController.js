const user=require("../Model/user")
// USER PROFILE
exports.userList=async(req,res,next)=>{
    const userList=await user.find({})
    res.send({
        isSuccess: true,
        message: "user list fetch succeessly",
        data:userList
    })
}
exports.userAdd=async(req,res,next)=>{
    console.log(req.file);
    console.log("email-->",req.body.email);
    const {username,email,password,dob}=req.body;
    if(!username || !email || !password || !dob){
        res.send({
            isSuccess: false,
            message: "Please provide all required fields",
        })
    }
    const objAdd={
        username:username,
        email:email,
        password:password,
        dob:dob,
        img:req.file. path,
        createdOn:new Date(),
        createsBy:null,
        updatedOn:new Date(),
        status:"N", 
    }
    const createResponse=await user.create(objAdd);
    res.send({
        isSuccess: true,
        message: "User successfully added",
    })
}
exports.userEdit=async(req,res,next)=>{
    const id=req.body.id;
    const objUpdate={};
    if(req.body.username){
        objEdit.username=req.body.username
    }
    if(req.body.email){
        objEdit.email=req.body.email
    }
    if(req.body.dob){
        objEdit.dob=req.body.dob
    }
    if(req.body.status){
        objEdit.status=req.body.status
    }
    if(req.file.img){
        objEdit.img=req.body.img
    }
const updateResponse=await user.updateOne({_id:id},{$set:objUpdate});
console.log("updateResponse-->",updateResponse);
   res.send({
       isSuccess: true,
       message: "User Edited Successfully",
   })
}

