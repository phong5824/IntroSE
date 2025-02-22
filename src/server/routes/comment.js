require("dotenv").config();
const express = require("express");
const router = express.Router();
const commentController = require("../controller/comment");


router.post("/", commentController.createCommentControl);
router.put("/", commentController.editCommentControl);
router.delete("/", commentController.deleteCommentControl);

module.exports = router;