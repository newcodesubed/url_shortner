import dns from "dns/promises";
import ipaddr from "ipaddr.js";

async function isPrivateOrInternal(hostname) {
  try {
    const { address } = await dns.lookup(hostname);

    const ip = ipaddr.parse(address);

    // IPv4 checks
    if (ip.kind() === "ipv4") {
      if (
        ip.range() === "loopback" ||
        ip.range() === "private" ||
        ip.range() === "linkLocal"
      ) {
        return true;
      }
    }

    // IPv6 checks
    if (ip.kind() === "ipv6") {
      if (
        ip.range() === "loopback" ||
        ip.range() === "uniqueLocal" ||
        ip.range() === "linkLocal"
      ) {
        return true;
      }
    }

    return false;
  } catch {
    return true; // Fail closed
  }
}
export default {
    isPrivateOrInternal
}