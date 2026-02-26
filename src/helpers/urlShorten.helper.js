function validateUrls(originalUrl) {
  try {
    const parseUrl = new URL(originalUrl);
    // if you want to enforce only HTTP/HTTPS
    if (!["http:", "https:"].includes(parsed.protocol)) {
      return res.status(400).json({ error: "Only HTTP/HTTPS allowed" });
    }
  } catch {
    return res.status(400).json({ error: "Invalid URL" });
  }
}
export default {
  validateUrls,
};
