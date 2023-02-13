const form = document.querySelector(".login-form");

const onFormSubmit = event => {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены");
  }
  
  const obj = {email: email.value, Password: password.value};
  console.log(obj);

  event.currentTarget.reset();
}

form.addEventListener("submit", onFormSubmit);