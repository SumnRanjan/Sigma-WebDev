// const form = document.querySelector(".form");
// const usernameInput = document.querySelector("#username");
// const passwordInput = document.querySelector("#password");
// const paswordConfirmationInput = document.querySelector( "#password-confirmation");
// const AgreeInput = document.querySelector("#checkbox-id");
// const Incorrect = document.querySelector(".incorrect");
// const correct = document.querySelector(".correct");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const errorMessages = [];
//   clearErrors();

//   if (usernameInput.value.length < 6) {
//     errorMessages.push("Username must be at least 6 character");
//   }

//   if (passwordInput.value.length < 10) {
//     errorMessages.push("Password must be at least 6 character");
//   }

//   if (paswordConfirmationInput.value.length !== passwordInput.value) {
//     errorMessages.push("Password must match");
//   }

//   if (!AgreeInput.checked) {
//     errorMessages.push("You Must accept the terms");
//   }

//   if (errorMessages.length > 0) {
//     e.preventDefault();
//     showErrors(errorMessages);
//   }

//   console.log(errorMessages);
// });

// function clearErrors() {}

// function showErrors(errorMessages) {
//   errorMessages.array.forEach((errorMessages) => {
//     const li = document.createElement("li");
//     li.innerText = errorMessages;
//     Incorrect.appendChild(li);
//   });
  
// }
