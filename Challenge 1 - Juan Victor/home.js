const apiKey = "d12b340f5ce3cb28076cf964596a9656";

function getTemperatura(cidade) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      const temperatura = data.main.temp.toFixed(0);
      const cidade = data.name;
      const estado = data.sys.country;
      document.getElementById("temperatura").innerHTML = temperatura + "º";
      let local = cidade + " - " + estado;
      document.getElementById("cidade").innerHTML = local;
    });
}
const profile = JSON.parse(sessionStorage.getItem("profile"));
getTemperatura(profile.city);
