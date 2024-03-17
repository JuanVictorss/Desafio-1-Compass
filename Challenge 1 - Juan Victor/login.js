function loginForm() {
  let userName = document
    .getElementById("inputName")
    .value.replace(/\s+/g, "")
    .toLowerCase();
  let password = document.getElementById("inputPassword").value;
  for (let i = 0; i < localStorage.length; i++) {
    let profile = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (
      (userName === localStorage.key(i) ||
        userName === profile.fName + profile.lName) &&
      password === profile.password
    ) {
      window.location.href = "home.html";
      return false;
    } else {
      let error = document.getElementById("error");
      error.innerText = "Wow, invalid username or password. Please, try again!";
      return false;
    }
  }
}
