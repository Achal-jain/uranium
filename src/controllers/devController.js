const batchModel = require("../models/batchModel")
const devModel= require("../models/devModel")

const createDev= async function (req, res) {
    let dev = req.body
    let devCreated = await devModel.create(dev)
    res.send({data: devCreated})
}

const getdevData= async function (req, res) {
    let devs = await devModel.find()
    res.send({data: devs})
}

const getBatchWithDevDetails = async function (req, res) {
    let specificDev = await devModel.find().populate('batch')
    res.send({data: specificDev})

}
const getScholarshipDetails = async function (req, res) {
    let scholarDev = await devModel.find({gender:"female",percentage:{$gte:70}}).select({name:1,percentage:1,_id:0})
    res.send({data: scholarDev})

}
const getDevelopers = async function (req, res) {
    let detail = await batchModel.find({name:req.query.name}).select({_id:1})
    const filterData=await devModel.find({percentage:{$gte:req.query.percentage},batch:detail}).populate('batch')
    res.send({data: detail})

}
module.exports.createDev= createDev
module.exports.getdevData= getdevData
module.exports.getBatchWithDevDetails = getBatchWithDevDetails
module.exports.getScholarshipDetails =getScholarshipDetails
module.exports.getDevelopers = getDevelopers