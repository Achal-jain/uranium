const publishModel = require("../models/publishModel")


const createPublisher =async function(req , res){
    let publisher=req.body
    let publisherCreated= await publishModel.create(publisher)
    res.send({data: publisherCreated})
}
module.exports.createPublisher=createPublisher