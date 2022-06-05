const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjecttId = Schema.ObjectId;
const categoriesSchema = new Schema({


  bookType: {
    type: String, 
    default:null},
  bookName: 
  {type: String, 
    default:null},
  authorName:
   {type: String,
     default: null},
  price: 
  {type: Number, 
    default: null},
  createdOn: 
  {type: Date, 
    default: Date.now()},
  createdBy: 
  {type: ObjecttId, 
    default: null},
  updatedOn: 
  {type:String,
    default:Date.now()},
  updatedBy: 
  {type:String,
    default:null},
  status: 
  {type: String, 
    default:null},
    
  });
  module.exports = mongoose.model('categories', categoriesSchema);