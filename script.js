const submitBtn = document.getElementsByClassName("submit");
const dismissBtn = document.getElementsByClassName("dismiss-btn");
const emailInput = document.getElementById("email");
const defaultCard = document.getElementsByClassName("card");
const successCard = document.getElementsByClassName("success-card");
const submittedEmail = document.getElementsByClassName("submitted-email");
const subForm = document.getElementById("subscribe-form");
const errorMessage = document.getElementsByClassName("input-error-message");

var emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

subForm.addEventListener("submit", (el) => {
  el.preventDefault();

  if (emailInput.value.match(emailFormat)) {
    validate();
    displayEmail();
  }
});

dismissBtn[0].addEventListener("click", () => {
  dismissSuccessMessage();
});

function validate() {
  // defaultCard[0].style.display = "none";
  // successCard[0].style.display = "flex";
  defaultCard[0].classList.add("hidden");
  successCard[0].classList.add("visible");
}

function displayEmail() {
  let emailInputValue = emailInput.value;
  submittedEmail[0].innerHTML = emailInputValue;
}

function dismissSuccessMessage() {
  defaultCard[0].classList.remove("hidden");
  successCard[0].classList.remove("visible");

  subForm.reset();
}
