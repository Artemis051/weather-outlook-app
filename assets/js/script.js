const apiKey = '32fbe55e91a973984d7b1c7da92a87b9'; 
function getWeather(cityName, day) {
    const city = document.getElementById('cityInput').value;
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=chicago&appid=32fbe55e91a973984d7b1c7da92a87b9";
}
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperatureElement = document.querySelectorAll('.temperature')[cardIndex];
            const humidityElement = document.querySelectorAll('.humidity')[cardIndex];
            const windElement = document.querySelectorAll('.wind')[cardIndex];
            const cityElement = document.querySelectorAll('.city')[cardIndex];

            console.log(data);
            temperatureElement.textContent = `${data.main.temp}°F`;
            humidityElement.textContent = `${data.main.humidity}%`;
            windElement.textContent = `${data.wind.speed} m/s`;
            cityElement.textContent = data.name;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('button');
    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        const cityInput = document.getElementById('cityInput').value;
        for (let i = 0; i < 5; i++) {
            getWeather(cityInput, i);
        }
    });

    // Call getWeather with "Chicago" initially to load data for Chicago
    for (let i = 0; i < 5; i++) {
        getWeather("Chicago", i);
    }
});

// async function checkWeather(){
//     const response=await fetch(apiURL + `&appid=${apiKey}`);
//     var data=await response.json();

//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = data.main.temp + "°F";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + "mph";
// }

// checkWeather();


