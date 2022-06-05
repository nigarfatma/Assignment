const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({

// SCHEMA OF USER

    username: {type:String, default:null, required:true},
    email: {type:String, default:null, required:true},
    password: {type:String, default:null},
    dob: {type:Date, default:null},
    img: {type:String,required:true, default:null},
    createdOn: {type:Date,default:Date.now()},
    createdBy: {type:String,default:null},
    updatedOn: {type:String,default:Date.now()},
    updatedBy: {type:String,default:null},
    status: {type:String,default:null},
    
  });
  module.exports = mongoose.model('user', userSchema);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      