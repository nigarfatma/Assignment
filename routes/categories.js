var express = require('express');
var router = express.Router();
const categoriesController=require("../controller/categoriesController");

router.get('/cat',categoriesController.categoriesList);
 router.post('/cat',categoriesController.categoriesAdd);