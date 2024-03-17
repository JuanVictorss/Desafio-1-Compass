// d12b340f5ce3cb28076cf964596a9656
// Função para obter os dados do clima
function getWeatherData(city) {
  const apiKey = "d12b340f5ce3cb28076cf964596a9656"; // Substitua 'YOUR_API_KEY' pelo seu próprio API key da OpenWeather
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Fazendo a requisição
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao obter os dados do clima");
      }
      return response.json();
    })
    .then((data) => {
      // Atualizando a temperatura no HTML
      const temperaturaElement = document.querySelector("h2");
      temperaturaElement.textContent = `${data.main.temp}°C`;
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}

// Chamando a função para obter os dados do clima
getWeatherData("Sua Cidade"); // Substitua 'Sua Cidade' pelo nome da cidade que deseja obter o clima
