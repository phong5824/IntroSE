require('dotenv').config();
const express = require("express");
const router = express.Router();
const accountModel = require("../model/accountModel");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const User = require("../model/userModel");
const verifyToken = require("../middleware/account");


// @route GET API
// @desc GET user
// @access private
router.get('/',verifyToken,async(req,res) =>{

    try {
        const accounts = await User.find({account:req.userid}).populate('account',['email','password']);
        res.json({success:true,accounts});

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:'Internal server error'});
    }


});

// @route POST API/POST
// @desc Create account
// @access private

router.post('/',verifyToken,async(req,res) =>{

    const {user_id,name,gender} = req.body;

    if(!user_id ||!name){
        res.status(400).json({success:false,message:'Bad request'});
    }

    try {
        console.log(req.userid);
        const newUser = new User({user_id:user_id,name: name,gender : gender,account:req.userid});
        
        await newUser.save();
        res.status(200).json({success:true,message:'Create user success',user:newUser});

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:'Internal server error'});
    }


});

// @route POST API/POST
// @desc Post profile
// @access private

router.get('/profile',verifyToken,async(req,res) =>{

    const authHeader =  req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    
    if(!token)
    {
        res.status(401).json({success:false,message:'Access token not found'});
    }
        try {
            
             // Verify token
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
         
            const e_user  = await User.findOne({account:decoded.userid}).populate('account',['email']);
           

            res.status(200).json({success:true,message:'Profile of user',user:e_user});
            

        } catch (error) {
            
            console.log(error);
            res.status(401).json({success:false,message:'Invalid token'});
        }

});

module.exports = router;


