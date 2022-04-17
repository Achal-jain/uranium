const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publishModel=require("../models/publishModel")
const pbookModel=require("../models/pbookModel")

const createBook= async function (req, res) {
    let book = req.body
    let pubid =await publishModel.find({_id:book.publisher_id})
    if(pubid.length>0){
        let authid2 =await authorModel.find({_id:book.author_id})
        if(authid2.length>0){ 
        let bookCreated = await bookModel.create(book)
        res.send(bookCreated) 
    }  
    else{res.send("author Doesn't Exist")}
} 
else{res.send("publisher doesn't Exist")}
}  

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}



const getBooksWithAuthorDetails = async function (req, res) {
    let body=req.body
  let specificBook = await bookModel.find(body).populate(['author_id','publisher_id'])
   res.send(specificBook)
}

const createnewBook= async function (req, res) {
    let newBook = req.body
    let newbookCreated = await pbookModel.create(newBook)
    res.send({data: newbookCreated})
 
}
const updatedBook= async function (req, res) {
    let updateBook = req.body
    let newupdatedBook = await pbookModel.findOneAndUpdate({_id:req.body},{$set:{Hardcover:{type:Boolean,default:false}}})
    let oldprice=pbookModel.price
    let newprice= oldprice+10
    let againupdateBook= await newupdatedBook.findOneAndUpdate({rating:{$gt:1}}).select({rating:1,_id:0}).update({price:newprice})
    res.send({data:newupdatedBook})

}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.createnewBook = createnewBook
module.exports.updatedBook = updatedBook