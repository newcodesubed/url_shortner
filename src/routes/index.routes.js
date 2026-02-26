import express from "express";
import urlShortenController from "../controllers/urlShorten.controller.js";

const router = express.Router()

router
    .route("/short")
    .post(urlShortenController.urlShorten)

export default router;