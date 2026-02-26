import express from "express";
import urlShortenController from "../controllers/urlShorten.controller.js";

const router = express.Router()

router
    .route("/short")
    .post(urlShortenController.urlShorten)

router
    .route("/:shortId")
    .get(urlShortenController.getRedirectUrl)
export default router;