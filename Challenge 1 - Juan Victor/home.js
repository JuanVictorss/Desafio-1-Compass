const apiKey = "nooooooo";

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

const atual = new Date();

function dataHora() {
  const diaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const mesAno = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const hora = atual.getHours().toString().padStart(2, "0");
  const minuto = atual.getMinutes().toString().padStart(2, "0");
  stringHora = hora + ":" + minuto;

  document.getElementById("hora").textContent = stringHora;

  const dia = atual.getDate().toString().padStart(2, "0");

  document.getElementById("data").textContent = `${diaSemana[atual.getDay()]},
     ${dia} de ${mesAno[atual.getMonth()]}
   de ${atual.getFullYear()}`;
}

setInterval(dataHora, 1000);
dataHora();
