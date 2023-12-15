require("dotenv").config();
const express = require("express");

const Blogs = require("../model/blogModel");

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blogs.find({});

        for (const blog of blogs)
        {
            blog.created_time = blog.created_time.getDate();
        }
        res.status(200).json({success:true,blogs});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBlogs,
};
