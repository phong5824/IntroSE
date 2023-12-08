const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    user_id: {
        type: Number,
        required: true,
        ref: "users",
    },

    recipe_id: {
        type: Number,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },

    created_time: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model("Comment", commentSchema);
