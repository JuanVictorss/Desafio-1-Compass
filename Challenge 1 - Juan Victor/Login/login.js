function loginForm() {
  let userName = document
    .getElementById("inputName")
    .value.replace(/\s+/g, "")
    .toLowerCase();
  let password = document.getElementById("inputPassword").value;
  for (let i = 0; i < localStorage.length; i++) {
    alert("entrou no for");
    let profile = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (
      userName === localStorage.key(i) ||
      (userName === profile.fName + profile.lName &&
        password === profile.password)
    ) {
      alert("Acesso autorizado");
      window.location.href = "http://127.0.0.1:5500/HomePag/home.html";
    } else {
      alert("User ou senha incorreto");
    }
  }
}
