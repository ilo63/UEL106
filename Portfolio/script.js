window.onload = function() {
    const apiKey = "4f824f6331eafa53205e957130cb264f"; // Remplacez avec votre propre clé API
    const weatherDiv = document.getElementById("weather");

    async function fetchWeather(city = "Paris") {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`
            );
            const data = await response.json();

            if (data.cod !== 200) {
                weatherDiv.innerHTML = `<p>Erreur : ${data.message}</p>`;
                return;
            }

            const { name, weather, main } = data;
            weatherDiv.innerHTML = `
                <div class="weather-info">
                    <h2>${name}</h2>
                    <p>${weather[0].description}</p>
                    <p>Température : ${main.temp}°C</p>
                    <p>Humidité : ${main.humidity}%</p>
                </div>
            `;
        } catch (error) {
            weatherDiv.innerHTML = `<p>Impossible de charger la météo. Veuillez réessayer plus tard.</p>`;
            console.error("Erreur lors de la récupération des données météo :", error);
        }
    }

    fetchWeather();
}
