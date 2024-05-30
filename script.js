let inputFirstName = document.getElementById("firstname");
let inputLastName = document.getElementById("lastname");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");

let button = document.getElementById("button");

let nameerror = document.getElementById("nameerror");
let lastnameerror = document.getElementById("lastnameerror");
let emailerror = document.getElementById("emailerror");
let passerror = document.getElementById("passerror");

let erroricon1 = document.getElementById("erroricon1");
let erroricon2 = document.getElementById("erroricon2");
let erroricon3 = document.getElementById("erroricon3");
let erroricon4 = document.getElementById("erroricon4");

button.addEventListener("click", (Event) => {
  validateFirstName(inputFirstName.value);
  validateLasttName(inputLastName.value);
  validateEmail(inputEmail.value);
  validatePassword(inputPassword.value);
});

function validateFirstName(firstname) {
  let regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

  if (regex.test(firstname) === true) {
    nameerror.style.visibility = "hidden";
    erroricon1.style.visibility = "hidden";
  } else {
    nameerror.style.visibility = "visible";
    erroricon1.style.visibility = "visible";
    inputFirstName.style.border = "1px solid Red";
  }
}

function validateLasttName(lastname) {
  let regex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

  if (regex.test(lastname) === true) {
    lastnameerror.style.visibility = "hidden";
    erroricon2.style.visibility = "hidden";
  } else {
    lastnameerror.style.visibility = "visible";
    erroricon2.style.visibility = "visible";
    inputLastName.style.border = "1px solid Red";
  }
}

function validateEmail(email) {
  let regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (regex.test(email) === true) {
    emailerror.style.visibility = "hidden";
    erroricon3.style.visibility = "hidden";
  } else {
    emailerror.style.visibility = "visible";
    erroricon3.style.visibility = "visible";
    inputEmail.style.border = "1px solid Red";
  }
}

function validatePassword(password) {
  let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  if (regex.test(password) === true) {
    passerror.style.visibility = "hidden";
    erroricon4.style.visibility = "hidden";
  } else {
    passerror.style.visibility = "visible";
    erroricon4.style.visibility = "visible";
    inputPassword.style.border = "1px solid Red";
  }
}