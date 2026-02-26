import checkPrivateNetworkUtils from "../utils/checkPrivateNetwork.utils.js";
async function normalizeUrl(originalUrl) {
  let urlString = originalUrl.trim();

  // Add protocol if missing
  if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(urlString)) {
    urlString = "https://" + urlString;
  }

  let url;

  try {
    url = new URL(urlString);
  } catch {
    throw new Error("Invalid URL");
  }

  if (await checkPrivateNetworkUtils.isPrivateOrInternal(url.hostname)) {
    throw new Error("Forbidden address");
  }

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Only HTTP/HTTPS allowed");
  }

  url.hostname = url.hostname.toLowerCase();

  url.pathname = url.pathname.replace(/\/{2,}/g, "/").replace(/\/+$/, "");

  url.searchParams.sort();

  if (
    (url.protocol === "http:" && url.port === "80") ||
    (url.protocol === "https:" && url.port === "443")
  ) {
    url.port = "";
  }

  return url.toString();
}
export default {
  normalizeUrl,
};
