const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener('submit', (e) => {
  const messages = []
  if (fName.value === '' || fName.value == null) {
    messages.push('First Name Required')
  }

  if(messages.length > 0) {
    e.preventDefault()
    error.innerText = messages.join(', ')
  }
})

prompt("hello world");