import Navbar from "../modules/Navbar";
import Footer from "../modules/Footer";
import { useEffect, useState } from "react";
import BlogPostCard from "../modules/BlogPostCard";
import { Pagination } from "antd";
import { handleGetAllBlogs } from "../../action/blogAction";

// const blogPosts = Array.from({ length: 10 }, (_, index) => ({
//   id: index + 1,
//   excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//   imageUrl: slide_2,
//   date: "3 April 2022",
//   readTime: "5",
// }));

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogs = await handleGetAllBlogs();
        setBlogPosts(blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error.message);
      }
    };

    fetchBlog();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-green-200 py-8">
        <h1 className="text-2xl font-bold mb-8 text-center">
          Chào mừng bạn đến với Blogs của LoveCook.
        </h1>
        <div className="container mx-auto px-4">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Pagination defaultCurrent={1} total={500} />;
      <Footer />
    </>
  );
};

export default Blog;
