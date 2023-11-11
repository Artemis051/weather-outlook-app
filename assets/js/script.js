
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        const cityInput = document.getElementById('cityInput').value;
        for (let i = 0; i < 5; i++) {
            getWeather(cityInput, i);
        }
    });

    for (let i = 0; i < 5; i++) {
        getWeather("Chicago", i);
    }
});

const apiKey = "32fbe55e91a973984d7b1c7da92a87b9";
const apiUrlBase = "https://api.openweathermap.org/data/2.5/forecast";

function getWeather(cityName, cardIndex) {
    const apiUrl = `${apiUrlBase}?q=${cityName}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const forecastData = data.list[cardIndex * 8];
            const temperatureElement = document.getElementById(`temperature${cardIndex}`);
            const humidityElement = document.getElementById(`humidity${cardIndex}`);
            const windElement = document.getElementById(`wind${cardIndex}`);
            const dayElement = document.getElementById(`day${cardIndex}`);
            const iconElement = document.getElementById(`icon${cardIndex}`);
            const cityElement = document.getElementById(`city${cardIndex}`);

            const temperatureInKelvin = forecastData.main.temp;
            const temperatureInFahrenheit = Math.round((temperatureInKelvin - 273.15) * 9/5 + 32);


            temperatureElement.textContent = `${temperatureInFahrenheit.toFixed(2)}°F`;
            humidityElement.textContent = `${forecastData.main.humidity}%`;
            windElement.textContent = `${forecastData.wind.speed} m/s`;
            dayElement.textContent = getDayOfWeek(new Date(forecastData.dt * 1000).getDay());
            cityElement.textContent = cityName;

            const weatherIcon = forecastData.weather[0].icon;
            const iconPath = getIconPath(weatherIcon);
            iconElement.src = iconPath;  
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function getIconPath(iconCode) {
    // Map the icon code to the corresponding image file
    const iconMap = {
        '01d': 'assets/images/clear.png',
        '02d': 'assets/images/clouds.png',
        '03d': 'assets/images/clouds.png',
        '04d': 'assets/images/clouds.png',
        '09d': 'assets/images/drizzle.png',
        '10d': 'assets/images/rain.png',
        '11d': 'assets/images/wind.png',
        '13d': 'assets/images/snow.png',
        '50d': 'assets/images/mist.png',
    };

    return `assets/images/${iconMap[iconCode]}`;
}

function getDayOfWeek(dayIndex) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayIndex];
}


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


