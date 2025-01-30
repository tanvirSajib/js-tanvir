{/* <div class="container">
    <h1>Weather App</h1>
    <input type="text" id="city-input" placeholder="Enter city name">
    <button id="fetch-weather">Get Weather</button>
    <div id="weather-info">
        <!-- Weather data will be displayed here -->
      </div>
   </div> */}

   

const apiKey = '9a6b122a97d22a91462320cfbc2f70d1'; 
const weatherInfo = document.getElementById('weather-info');
const cityInput = document.getElementById('city-input');
const fetchButton = document.getElementById('fetch-weather');

fetchButton.addEventListener("click", function(){
    const city = cityInput.value.trim();

    if( city ){
        // fetch weather of the city
        fetchWeather(city);
    }else{
        alert("Please enter a city name")
    }
})

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid==${apiKey}`;

    console.log(url)

    try{
        const response = await fetch(url);
        const data = await response.json(); 

        if(data.cod === 200){
            displayWeather(data)
        }else{
            weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`;
        }
    } catch(error){
        console.log( error )
    }
}

function displayWeather(data){
    const { name, main, weather } = data;
    const temperature = main.temp;
    const condition = weather[0].description;
    const icon = weather[0].icon;

    weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${condition}</p>
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${condition}">
    `;
}