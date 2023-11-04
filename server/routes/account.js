const express = require("express");
const router = express.Router();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const accountModel = require("../model/accountModel");


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
            res.json({ success: true, userId: result.user_id, message:"Login Success"});
            
            // res.redirect(`/home/${result.email}`);
          } else {
            console.log("Fail");
            res.json({ success: false, error: "Incorrect password!" });
          }
        }
      });

    } catch (error) {

      console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error'});
      
    }
    
  });
  
  router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const result = await accountModel.findOne({ email: email });
  
    if (result) {
      res
        .status(409)
        .json({ success: false, error: "Username already exists!" });
    } else {
      console.log("Success");
      
      const maxUserId = await accountModel.estimatedDocumentCount()
      const account = new accountModel({
        user_id: maxUserId + 1,
        email: email,
        password: password,
      });
  
      account.save().then(() => {
        res.json({ success: true, message: "Register Success" });
      });
    }
  });
  

  module.exports = router;