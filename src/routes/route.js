const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishController=require("../controllers/publishControllers")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createPublisher",publishController.createPublisher)

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createnewBook", bookController.createnewBook)

router.put("/updatedBook", bookController.updatedBook)

module.exports = router;