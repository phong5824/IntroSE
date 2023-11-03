const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({

    password: {
      type: String,
      required: true,
    },

    email:
    {
      type:String,
      unique:true,
      required:true,
    },
    
  
});


module.exports = mongoose.model('accounts',schema);
