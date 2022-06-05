const cat=require("../Model/Categories")
exports.categoriesList=async(req,res,next)=>{
    const searchfilter={};
    const categoriesList=await categories.find(searchfilter)
    if(categoriesList && categoriesList.length){
        res.send({
            total:categoriesList.length,
            categories:categoriesList
        })
    }
    else{
        res.send({
            total:0,
            categories:[]
        })
    }
} 

exports.categoriesAdd=async(req,res,next)=>{
    const {bookType,bookName,authorName,price}=req.body;;
    const objAdd ={
        bookType: bookType,
        bookName:bookName,
        authorName:authorName,
        price:price,
        status: "null",
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: null,
        updatedBy: null
    }
    const createResponse=await categories.create(objAdd);
    res.send({
        isSuccess: true,
        message: " categories added to categories list.",

    })
}