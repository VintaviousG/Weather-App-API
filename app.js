const appTitle = document.querySelector(".app-title p ");
const notificationElement = document.querySelector(".notification");

const weatherIcon = document.querySelector(".weather-icon img");
const tempValue = document.querySelector(".temp-value p");
const tempDescritption = document.querySelector(".temp-description p");
const userLocation = document.querySelector(".user-location p");

function getLocation() {
    if (navigator.geolocation) {
        notificationElement.textContent = "Access Granted";
        navigator.geolocation.getCurrentPosition(getWeatherInfo);
    } else {
        notificationElement.textContent = "Access Denied";
        console.log("Sorry");
    }
}

const getWeatherInfo = (position) => {
    //Used to get Longitude and Latitude
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;

    const api_key = config.API_KEY;
    async function fetchWeather() {
        const options = {
            headers: {
                "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
                "X-RapidAPI-Key": `${api_key}`,
            },
            params: {
                lon: `${longitude}`,
                lat: `${latitude}`,
            },
        };

        const weatherBitURL =
            "https://weatherbit-v1-mashape.p.rapidapi.com/current";

        try {
            const response = await axios.get(weatherBitURL, options);

            //Convert celsues to fahrenheit and change inner text of tempValue to farenheight
            let Tempature = response.data.data[0].temp;
            let fahrenheit = (Tempature * 9) / 5 + 32;
            tempValue.textContent = `${fahrenheit}`;

            //Weather Desctiprtion
            const weather_description =
                response.data.data[0].weather.description;
            tempDescritption.textContent = `${weather_description}`;
            //User Location in the form State, Country
            const userState = response.data.data[0].state_code;
            const userCountry = response.data.data[0].country_code;
            userLocation.textContent = `${userState} , ${userCountry}`;

            //Change weather icon based on if its day or night
            const dayOrNight = response.data.data[0].pod;

            /**
             
          Obtain the weather icons according to the weather_description.
 For example, if the weather description was Thunderstorm with rain.
 In this case, it will check if it is day or night based on the API and change the src tag to the weather icon.
    
             */
            switch (weather_description) {
                case "Thunderstorm with light rain":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/t01d.png`)
                        : (weatherIcon.src = `icons/t01n.png`);
                    break;
                case "Thunderstorm with rain":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/t02d.png`)
                        : (weatherIcon.src = `icons/t02n.png`);
                    break;
                case "Thunderstorm with heavy rain":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/t03d.png`)
                        : (weatherIcon.src = `icons/t03n.png`);
                    break;
                case "Thunderstorm with light drizzle":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/t04d.png`)
                        : (weatherIcon.src = `icons/t04n.png`);
                    break;
                case "Thunderstorm with drizzle":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/t04d.png`)
                        : (weatherIcon.src = `icons/t04n.png`);
                    break;
                case "Thunderstorm with heavy drizzle":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/t04d.png`)
                        : (weatherIcon.src = `icons/t04n.png`);
                    break;

                case "Thunderstorm with hail":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/t05d.png`)
                        : (weatherIcon.src = `icons/t05n.png`);
                    break;
                case "Light Drizzle":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/d01d.png`)
                        : (weatherIcon.src = `icons/d01n.png`);
                    break;
                case "Drizzle":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/d02d.png`)
                        : (weatherIcon.src = `icons/d02n.png`);
                    break;
                case "Heavy Drizzle":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/d03d.png`)
                        : (weatherIcon.src = `icons/d03n.png`);
                    break;
                case "Light Rain":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/r01d.png`)
                        : (weatherIcon.src = `icons/r01n.png`);
                    break;
                case "Moderate Rain":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/r02d.png`)
                        : (weatherIcon.src = `icons/r02n.png`);
                    break;
                case "Heavy Rain":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/r03d.png`)
                        : (weatherIcon.src = `icons/r03n.png`);
                    break;
                case "Freezing rain":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/f01d.png`)
                        : (weatherIcon.src = `icons/f01n.png`);
                    break;
                case "Light shower rain":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/r04d.png`)
                        : (weatherIcon.src = `icons/r04n.png`);
                    break;
                case "Shower rain":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/r05d.png`)
                        : (weatherIcon.src = `icons/r05n.png`);
                    break;
                case "Heavy shower rain":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/r06d.png`)
                        : (weatherIcon.src = `icons/r06n.png`);
                    break;
                case "Light snow":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/s01d.png`)
                        : (weatherIcon.src = `icons/s01n.png`);
                    break;
                case "Snow":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/s02d.png`)
                        : (weatherIcon.src = `icons/s02n.png`);
                    break;
                case "Heavy Snow":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/s03d.png`)
                        : (weatherIcon.src = `icons/s03n.png`);
                    break;
                case "Mix snow/rain":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/s04d.png`)
                        : (weatherIcon.src = `icons/s04n.png`);
                    break;
                case "Sleet":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/s05d.png`)
                        : (weatherIcon.src = `icons/s05n.png`);
                    break;
                case "Heavy sleet":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/s05d.png`)
                        : (weatherIcon.src = `icons/s05n.png`);
                    break;
                case "Snow shower":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/s01d.png`)
                        : (weatherIcon.src = `icons/s01n.png`);
                    break;
                case "Heavy snow shower":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/s02d.png`)
                        : (weatherIcon.src = `icons/s02n.png`);
                    break;
                case "Flurries":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/s06d.png`)
                        : (weatherIcon.src = `icons/s06n.png`);
                    break;
                case "Mist":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/a01d.png`)
                        : (weatherIcon.src = `icons/a01n.png`);
                    break;
                case "Smoke":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/a02d.png`)
                        : (weatherIcon.src = `icons/a02n.png`);
                    break;
                case "Haze":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/a03d.png`)
                        : (weatherIcon.src = `icons/a03n.png`);
                    break;

                case "Sand/dust":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/a04d.png`)
                        : (weatherIcon.src = `icons/a04n.png`);
                    break;

                case "Fog":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/a05d.png`)
                        : (weatherIcon.src = `icons/a05n.png`);
                    break;

                case "Freezing Fog":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/a06d.png`)
                        : (weatherIcon.src = `icons/a06n.png`);
                    break;

                case "Clear sky":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/c01d.png`)
                        : (weatherIcon.src = `icons/c01n.png`);
                    break;
                case "Few clouds":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/c02d.png`)
                        : (weatherIcon.src = `icons/c02n.png`);
                    break;

                case "Scattered clouds":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/c02d.png`)
                        : (weatherIcon.src = `icons/c02n.png`);
                    break;
                case "Broken clouds":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/c03d.png`)
                        : (weatherIcon.src = `icons/c03n.png`);
                    break;
                case "Overcast clouds":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/c04d.png`)
                        : (weatherIcon.src = `icons/c04n.png`);
                    break;

                case "Unknown Precipitation":
                    dayOrNight === "d"
                        ? (weatherIcon.src = `icons/u00d.png`)
                        : (weatherIcon.src = `icons/u00.png`);
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    }

    fetchWeather();
};
getLocation();
