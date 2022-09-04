const submitBtn = document.querySelector(".submit-btn");

const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const passward = document.querySelector(".passward");

const errorMsg = Array.from(document.querySelectorAll(".error-msg"));

const errorIcon = Array.from(document.querySelectorAll(".error-icon"));

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  validFirstName();
  validLastName();
  validEmail();
  validPassward();
});

const validFirstName = function () {
  if (firstName.value === "") {
    firstName.classList.add("invalid");
    errorMsg[0].classList.add("active");
    errorIcon[0].style.display = "block";
  } else {
    firstName.classList.add("success");
  }
};

const validLastName = function () {
  if (lastName.value === "") {
    lastName.classList.add("invalid");
    errorMsg[1].classList.add("active");
    errorIcon[1].style.display = "block";
  } else {
    lastName.classList.add("success");
  }
};

const validEmail = function () {
  let EmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value === "") {
    email.classList.add("invalid");
    errorMsg[2].classList.add("active");
    errorIcon[2].style.display = "block";
  } else if (!email.value.match(EmailRegex)) {
    email.classList.add("invalid");
    errorMsg[2].classList.add("active");
    errorIcon[2].style.display = "block";
  } else {
    email.classList.add("success");
  }
};

const validPassward = function () {
  let passwardRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

  if (passward.value === "") {
    passward.classList.add("invalid");
    errorMsg[3].classList.add("active");
    errorIcon[3].style.display = "block";
  } else if (!passward.value.match(passwardRegex)) {
    passward.classList.add("invalid");
    errorMsg[3].classList.add("active");
    errorIcon[3].style.display = "block";
  } else {
    passward.classList.add("success");
  }
};
