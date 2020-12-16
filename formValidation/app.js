let form = document.querySelector("#form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let usernameValue = username.value;
  let emailValue = email.value;
  let passwordValue = password.value;
  let password2Value = password2.value;

  if (usernameValue === "") {
    setError(username, "Username cannot be blank");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setError(email, "Invalid email");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be blank");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Password cannot be blank");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Password is not match");
  } else {
    setSuccess(password2);
  }
});

//username yoxlama
username.addEventListener("change", () => {
  let usernameValue = username.value;
  if (usernameValue === "") {
    setError(username, "Username cannot be blank");
  } else {
    setSuccess(username);
  }
});

//email yoxlama
email.addEventListener("change", () => {
  let emailValue = email.value;
  if (emailValue === "") {
    setError(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setError(email, "Invalid email");
  } else {
    setSuccess(email);
  }
});

//password yoxlama
password.addEventListener("change", () => {
  let passwordValue = password.value;
  if (passwordValue === "") {
    setError(password, "Password cannot be blank");
  } else {
    setSuccess(password);
  }
});

//password2 yoxlama
password2.addEventListener("change", () => {
  let password2Value = password2.value;
  if (password2Value === "") {
    setError(password2, "Password cannot be blank");
  } else if (password2Value !== password.value) {
    setError(password2, "Password is not match");
  } else {
    setSuccess(password2);
  }
});

//-------------- funksiyalar---------------
function setSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}

function setError(input, message) {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  formControl.querySelector("small").textContent = message;
}

function isEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}
