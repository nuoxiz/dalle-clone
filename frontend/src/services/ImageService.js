import axios from "axios";

const API_URI = "/api/v1/dalle";

const generateImageFromPrompt = async (prompt) => {
  const response = await axios.post(API_URI, {
    prompt: prompt,
  });
  return response;
};

export { generateImageFromPrompt };
