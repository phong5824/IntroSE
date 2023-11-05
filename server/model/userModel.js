const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({

    user_id:{
        type: Number,
        unique: true,
        required:true,
    },

    name:{
        type : String,
        required : true,
    },

    gender:{
        type : String,
        required : true,
        enum:['male','female','other'],
        default:'other',
    },

    isadmin:{
        type:Boolean,
        enum:[true,false],
        default:false,
    },

    age:
    {
        type:Number,
        required:false,
        default:0,
    },

    user_recipes:
    {
        type: [Schema.Types.ObjectId],
        ref:'recipes',

    },

    favourites:
    {
        type: [Schema.Types.ObjectId],
        ref:'recipes',

    },

    followers:
    {
        type: [Schema.Types.ObjectId],
        ref:'users',

    },

    account:
    {
        type: Schema.Types.ObjectId,
        ref:'accounts',
    },

});

module.exports = mongoose.model('users',schema);


