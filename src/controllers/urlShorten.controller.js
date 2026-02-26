import express from "express";
// will be using db in next version
let url ={}
function urlShorten(req, res){
    let originalUrl= req.body?.originalUrl;
    
    if(!originalUrl){
        return res.sendStatus(400);
    }

    originalUrl = originalUrl.trim();

    if(!/^[a-zA-Z][a-aZ-Z0-9+.-]*:\/\//.test(originalUrl)){
        originalUrl = 'https://' + originalUrl;
    }
    
}
export default {
    urlShorten
}