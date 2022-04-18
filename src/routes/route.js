const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const batchController=require("../controllers/batchController")
const devController=require("../controllers/devController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/createBatch", batchController.createBatch)

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createDev", devController.createDev  )

router.get("/getdevData?percentage=90&program=uranium", devController.getdevData)

router.get("/getBatchWithDevDetails", devController.getBatchWithDevDetails)

router.get("/getScholarshipDetails", devController.getScholarshipDetails)

router.get("/getDevelopers", devController.getDevelopers)

module.exports = router;