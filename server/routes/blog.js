const express = require("express");
const router = express.Router();
const blogController = require("../controller/blog");

<<<<<<<<< Temporary merge branch 1
router.get("/", blogController.getAllBlogs);

module.exports = router;
=========
router.get("/blog", blogController.getAllBlogs);

module.exports = router;
>>>>>>>>> Temporary merge branch 2
