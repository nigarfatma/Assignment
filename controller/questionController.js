const questiondb = require("../Model/Questions/question")

//LIST QUESTION
exports.listQuestion=async(req,res,next)=>{
    const {question,level,  categoriesId,} = req.body;
    let searchFilter={
        question:question,
        level:level,
        categoriesId:categoriesId,};

    //#region Set pagination and sorting
    let sortRecord = { _id: -1 };
    let pageIndex = 1;
    let pageSize = 1;
    let limitRecord = pageSize;
    let skipRecord = 0;
    if (req.query.pageSize) {
        pageSize = parseInt(req.query.pageSize);
    }
    if (req.query.pageIndex) {
        pageIndex = parseInt(req.query.pageIndex);
    }
    if (pageIndex > 1) {
        skipRecord = (pageIndex - 1) * pageSize;
    }
    limitRecord = pageSize;
    if (req.query.sortBy && req.query.sortType) {
        let sortBy = req.query.sortBy;
        let sortType = "";
    if (req.query.sortType.toLowerCase() === "desc") {
        sortType = "-1";
    }
    sortRecord = {};
    sortRecord[sortBy] = sortType;
  }

   // #endregion
    const questionList=await questiondb
                            .find(searchFilter)
                            .populate("categoriesId")
                            .sort(sortRecord)
                            .limit(limitRecord)
                            .skip(skipRecord)
                            .exec();
        if (req.query.name) {
            searchFilter.name = { $regex: req.query.name, $options: "i" };
        }
        if (req.query.attribute) {
            searchFilter.attribute = { $regex: req.query.attribute, $options: "i" };
        }

    if(questionList && questionList.length){
        res.send({
            total:questionList.length,
            questions:questionList
        })
    }
    else{
        res.send({
            total:0,
            questions:[]
        })
    }
} 

//ADD QUESTION
exports.addQuestion = async(req,res,next)=>{
    // const userId = req.header.userId;
    const {question, level, categoriesId}=req.body;
    const objAdd ={
        question: question,
        level: level,
        categoriesId: categoriesId, 
        topicId: topicId, 
        status: "Y",
        createdAt:Date.now(),
        updatedAt:Date.now(),
        createdBy:null,
        updatedBy:null
    }
    const createResponse=await questiondb.create(objAdd);
    res.send({
        isSuccess: true,
        message: "New question added to.",

    })
}
