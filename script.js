const apiKey = 'f78dfdbf45519e90605dbfe1551911cf';

async function getWeather() {
  const city = document.getElementById("city").value.trim();
  if (!city) return alert("Please enter a city name.");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("temp-div").innerHTML = `<p>${Math.round(data.main.temp)}°C</p>`;
    document.getElementById("weather-info").innerHTML = `
      <p><strong>${data.name}</strong></p>
      <p>${data.weather[0].main}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind: ${data.wind.speed} km/h</p>
    `;

    const iconCode = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const icon = document.getElementById("weather-icon");
    icon.src = iconURL;
    icon.style.display = "block";

  } catch (error) {
    alert("Error: " + error.message);
  }
}
