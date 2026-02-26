// import express from "express";
import urlShortenHelper from "../helpers/urlShorten.helper";
// will be using db in next version
let url ={}
function urlShorten(req, res){
    let originalUrl= req.body?.originalUrl;
    
    if(!originalUrl){
        return res.sendStatus(400);
    }
    // try catch
    normalizedUrl= urlShortenHelper.normalizeUrl;
}
export default {
    urlShorten
}