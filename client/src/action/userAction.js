import axios from "axios";

export const handleGetAllUsers = async () => {
  try {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      "http://127.0.0.1:8000/users/admin",
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching all users:", error.message);
    throw error;
  }
};
