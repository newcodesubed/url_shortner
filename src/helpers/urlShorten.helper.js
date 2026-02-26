function validateUrl(originalUrl) {
  try {
    const url = new URL(originalUrl);
    // if you want to enforce only HTTP/HTTPS
    if (!["http:", "https:"].includes(url.protocol)) {
      throw new Error("Only HTTP/HTTPS allowed");
    }
  } catch {
    throw new Error("Invalid URL");
  }
}

function normalizeUrl(originalUrl) {
  let urlString = originalUrl.trim();

  // Add protocol if missing
  if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(urlString)) {
    urlString = "https://" + urlString;
  }
  url = validateUrl(urlString);

  url.hostname = url.hostname.toLowerCase();

  // Normalize path
  url.pathname = url.pathname.replace(/\/{2,}/g, "/").replace(/\/+$/, "");

  // Sort query params
  url.searchParams.sort();

  // Remove default ports
  if (
    (url.protocol === "http:" && url.port === "80") ||
    (url.protocol === "https:" && url.port === "443")
  ) {
    url.port = "";
  }
  return url.toString();
}
export default {
  validateUrl,
  normalizeUrl,
};
