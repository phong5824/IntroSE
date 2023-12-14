import axios from 'axios';

export const handleGetAllBlogs = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/blog");
        const blogs = response.data;
        console.log("Blogs:", blogs);
    } catch (error) {
        console.error("Error fetching blogs:", error.message);
    }
};
