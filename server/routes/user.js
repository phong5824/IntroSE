require('dotenv').config();
const express = require("express");
const router = express.Router();
const accountModel = require("../model/accountModel");
const jwt = require("jsonwebtoken");

const User = require("../model/userModel");
const verifyToken = require("../middleware/account");



router.get('/',verifyToken,async(req,res) =>{

    try {
        const accounts = await User.find({accounts:req.userid}).populate('account','email');
        res.json({success:true,accounts});

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:'Internal server error'});
    }


});

module.exports = router;

// @route GET API/POST
// @desc GET post
// @access private
