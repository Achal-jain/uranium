const pbookModel = require("../models/pbookModel")


const createPbook =async function(req , res){
    let pbook=req.body
    let pbookCreated= await publishModel.create(pbook)
    res.send({data: publisherCreated})
}
module.exports.createPublisher=createPublisher