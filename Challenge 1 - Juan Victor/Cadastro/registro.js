function registerForm() {
  var firstName = document.getElementById("inputName").value.toLowerCase();
  var lastName = document.getElementById("inputLast").value.toLowerCase();
  var date = document.getElementById("inputDate").value;
  var country = document.getElementById("inputCountry").value;
  var city = document.getElementById("inputCity").value;
  var email = document.getElementById("inputEmail").value.toLowerCase();
  var password = document.getElementById("inputPassword").value;
  var confirm = document.getElementById("inputConfirm").value;

  if (password != confirm) {
    alert("Senhas não estão iguais");
    return false;
  }

  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) === email) {
      alert("Email já cadastrado");
      return false;
    }
  }

  let person = {
    fName: firstName,
    lName: lastName,
    date: date,
    country: country,
    city: city,
    email: email,
    password: password,
  };
  localStorage.setItem(email, JSON.stringify(person));

  window.location.href = "../Login/login.html";
}
