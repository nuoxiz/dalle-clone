import express from "express";


import authController from "../controller/authController";

const router = express.Router();

router.route("/signin").get(authController.signIn);
router.route("/signout").get(authController.signOut);
router.route("/redirect").post(authController.handleRedirect);

export default router;
