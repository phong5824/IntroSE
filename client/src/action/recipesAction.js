import axios from "axios";
import { message } from "antd";

// Get recomended recipes
export const handleRecommendedRecipes= async () => {
    try {
  
      const result = await axios.get("http://127.0.0.1:8000/");
  
      if (result.data.success === true) {
        return result.data.recommended_recipes ;
      } else {
        message.error(result.data.error);
      }
    } catch (err) {
      console.log(err);
    }
    return false;
  };