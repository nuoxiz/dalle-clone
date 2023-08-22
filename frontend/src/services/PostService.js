import axios from "axios";

const API_URI = "/api/v1/post/";

const createNewPost = async (form) => {
  const response = await axios.post(API_URI, form);
  return response;
};


const getPosts = async () => {
    const response = await axios.get(API_URI);
    return response;
}


export { createNewPost, getPosts };
