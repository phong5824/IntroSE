import Navbar from "../components/modules/Navbar";
import Footer from "../components/modules/Footer";
import slide_2 from "../assets/slide_2.png";
import BlogPostCard from "../components/modules/BlogPostCard";
import { Pagination } from "antd";

const blogPosts = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: `Blog Post Title ${index + 1}`,
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  imageUrl: slide_2,
  date: "3 April 2022",
  readTime: "5",
}));

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="bg-green-200 py-8">
        <h1 className="text-2xl font-bold mb-8 text-center">
          Chào mừng bạn đến với Blogs của LoveCook.
        </h1>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      <Pagination defaultCurrent={1} total={500} />;
      <Footer />
    </>
  );
};

export default Blog;
