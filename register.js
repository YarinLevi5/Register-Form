let form = document.querySelector("#forme");
let name = document.getElementById("name");
let email = document.querySelector("#email");
let pass = document.getElementById("pass");
let checkbox = document.querySelector("#checkbox");

// message
let messages = document.querySelectorAll(".mes");
let detailsMessage = document.querySelector('.details');
const formData = {};

form.addEventListener('submit', (e) => {
   e.preventDefault();
});

name.addEventListener('input', (e) => {
   formData['Name'] = e.target.value;
   if (e.target.value < 2) {
      messages[0].innerText = "*Please write your name";
   }
   return;
});

email.addEventListener('input', (e) => {
   formData['Email'] = e.target.value;
   if (e.target.value.indexOf("@") == -1 || e.target.value.indexOf(".") == -1) {
      messages[1].innerText = "*Invalid email";
      return;
   }
});

pass.addEventListener('input', (e) => {
   formData['Password'] = e.target.value;
   if (e.target.value.length < 6) {
      messages[2].innerText = "*Invalid password";
      return;
   }
});
checkbox.addEventListener('input', (e) => {
   formData['checkbox'] = e.target.checked;
   if (e.target.checked === false) {
      messages[3].innerText = "*You need to check this";
      return;
   }
});

let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
   detailsMessage.classList.add("detailsShow");
});