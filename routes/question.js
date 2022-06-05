var express = require('express');
var router = express.Router();
const questionController=require("../controller/questionController");

router.get('/question', questionController.listQuestion);
//Add Questions
router.post('/question', questionController.addQuestion);