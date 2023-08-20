import express from "express";
import * as dotenv from "dotenv";

import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();
console.log(
  "process.env.CLOUDINARY_CLOUD_NAME >>> " + process.env.CLOUDINARY_CLOUD_NAME
);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// get all posts
router.route("/").post(async (req, res) => {
  try {
    console.log("Uploading POST...");
    // console.log("req.body => " + JSON.stringify(req.body));
    const { name, prompt, photo } = req.body;
    console.log("name => " + name);
    console.log("prompt => " + prompt);
    const photoUrl = await cloudinary.uploader.upload(photo);
    console.log("Image uploaded...");
    console.log("Creating POST...");
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });
    console.log("Image created...");

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
});

router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
