const firstNameErr = document.getElementById("first-name-required");
const firstNameField = document.getElementById("first-name");

const lastNameErr = document.getElementById("last-name-required");
const lastNameField = document.getElementById("last-name");

const emailErr = document.getElementById("email-error");
const emailField = document.getElementById("email");

const typeErr = document.getElementById("type-required");
const genField = document.getElementById("general-equiry");
const supField = document.getElementById("support-request");

const msgErr = document.getElementById("msg-required");
const msgField = document.getElementById("msg");

const consentErr = document.getElementById("consent-required");
const consentField = document.getElementById("consent");

const contactForm = document.querySelector(".contact-form");
const successMsg = document.querySelector(".success");

contactForm.addEventListener("submit", e => {
  e.preventDefault();

  // Display error messages if needed
  if (firstNameField.value.length <= 0) {
    firstNameErr.classList.remove("hidden");
  }

  if (lastNameField.value.length <= 0) {
    lastNameErr.classList.remove("hidden");
  }

  if (!emailField.checkValidity() && !emailField.value.length >= 0) {
    emailErr.classList.remove("hidden");
  }

  if (genField.checked == false && supField.checked == false) {
    typeErr.classList.remove("hidden");
  }

  if (msgField.value.length <= 0) {
    msgErr.classList.remove("hidden");
  }

  if (consentField.checked == false) {
    consentErr.classList.remove("hidden");
  }

  // Check if all input is valid
  if (firstNameField.value.length > 0 
    && lastNameField.value.length > 0 
    && emailField.checkValidity() 
    && emailField.value.length > 0 
    && msgField.value.length > 0
    && consentField.checked == true
    && genField.checked == true || supField.checked == true) {
      // Remove any error messages if needed
      firstNameErr.classList.add("hidden");
      lastNameErr.classList.add("hidden");
      emailErr.classList.add("hidden");
      typeErr.classList.add("hidden");
      msgErr.classList.add("hidden");
      consentErr.classList.add("hidden");

      // Display success message
      successMsg.classList.remove("hidden");
  }
})

// Dismiss success message
successMsg.addEventListener("click", () => {
  successMsg.classList.add("hidden");
})