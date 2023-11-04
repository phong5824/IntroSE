require('dotenv').config();
const express = require("express");
const router = express.Router();
const accountModel = require("../model/accountModel");
const jwt = require("jsonwebtoken");

const verifyToken = require("../middleware/account");
const User = require("../model/userModel");


router.post("/login", async(req, res) => {
    const {email, password } = req.body;
  
    try {
      await accountModel.findOne({email:email}).then((result) => {
        if (!result) {
         
          console.log("Username does not exist!");
          res.json({ success: false, error: "Username does not exist!" });
  
        } else {
  
          if (result.password === password && result.password) {
            console.log("Success");
            
            const accessToken = jwt.sign({userid:result._id},process.env.ACCESS_TOKEN_SECRET);

            res.status(200).json({ success: true, message:"Login Success",accessToken});

          } else {
            console.log("Fail");
            res.status(404)
            .json({ success: false, error: "Incorrect password!" });
          }
        }
      });

    } catch (error) {

      console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error'});
      
    }
    
  });

// @route POST /register
// @desc Resgister user
// @access public

 router.post("/register", async(req, res) => {
    const { email, password } = req.body;
    accountModel.findOne({email:email }).then((result) => {
      if (result) {
        res
          .status(409)
          .json({ success: false, error: "Username already exists!" });
      } else {
        console.log("Success");
        const account = new accountModel({
          email: email,
          password: password,
        });
        account.save().then(() => {
          const accessToken = jwt.sign({userid:account._id},process.env.ACCESS_TOKEN_SECRET);
          res.status(200)
          .json({ success: true, message:"Register Success",accessToken});
        });
      }
    });
  });



  module.exports = router;