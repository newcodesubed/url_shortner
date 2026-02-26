// import express from "express";
import { nanoid } from "nanoid";
import urlShortenHelper from "../helpers/urlShorten.helper.js";
// will be using db in next version
let urls = {};
async function urlShorten(req, res) {
  let originalUrl = req.body?.originalUrl;

  if (!originalUrl) {
    return res.sendStatus(400).json({ error: "originalUrl is required" });
  }
  let originalNormalizedUrl;
  try {
    originalNormalizedUrl = await urlShortenHelper.normalizeUrl(originalUrl);
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
  // Deduplication check
  for (let shortId in urls) {
    if (urls[shortId] === originalNormalizedUrl) {
      return res.json({
        shortUrl: `http://127.0.0.1:3001/${shortId}`,
      });
    }
  }

  let shortId;

  do {
    shortId = nanoid(6);
  } while (urls[shortId]);

  urls[shortId] = originalNormalizedUrl;

  console.log(urls);

  res.json({
    shortUrl: `http://127.0.0.1:3001/${shortId}`,
  });
}

function getRedirectUrl(req, res) {
  const { shortId } = req.params;
  const shortIdRegex = /^[A-Za-z0-9_-]{6}$/;

  if (!shortIdRegex.test(shortId)) {
    return res.sendStatus(400);
  }

  const originalUrl = urls[shortId];

  if (!originalUrl) {
    return res.sendStatus(404);
  }

  // return res.redirect(originalUrl);
  return res.json({
    redirectTo: originalUrl
  });
}
export default {
  urlShorten,
  getRedirectUrl,
};
