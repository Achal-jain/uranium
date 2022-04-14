const  authorModel=require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createNewAuthor= async function (req, res) {
    const reqAuthor= req.body;
    const savedData= await authorModel.create(reqAuthor)
    res.send({msg: savedData})
}
const createNewBook= async function (req, res) {
    const reqBook= req.body;
    const savedData= await bookModel.create(reqBook)
    res.send({msg: savedData})
}
const allBooks= async function (req, res) {
    const authorDetails= await authorModel.find({authorName:"chetan bhagat"})
    const id=authorDetails[0].authorid
    const booksname=  await bookModel.find({author_id:id}).select({name:1, _id:0})
    res.send({msg: booksname})
}
const updateBookPrice= async function (req, res) {
    const bookDetails= await bookModel.find({Name:"Two states"})
    const id=bookDetails[0].author_id
    const authorN= await authorModel.find({authorid:id}).select({ authorName:1, _id:0})
    const bkName=bookDetails[0].name
    const updatedPrice= await bookModel.findOneAndUpdate({name:bkName},{price:100},{new:true}).select({price:1, _id:0})
    res.send({msg: authorN, updatedPrice})
}
const authorsName= async function (req, res) {
     const booksId= await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1, _id:0})
    const id= booksId.map(inp =>inp.author_id)
    let temp=[]
    for (let i=0;i<id.length;i++){
        let x =id[i]
        const author =await authorModel.find({authorid:x}).select({authorName:1, _id:0})
        temp.push(author)
    }
    const authorName =temp.flat()
     res.send({msg:authorName})
}
module.exports.createNewAuthor= createNewAuthor;
module.exports.createNewBook= createNewBook;
module.exports.allBooks= allBooks;
module.exports.updateBookPrice= updateBookPrice;
module.exports.authorsName= authorsName;