// import { mapServices } from './map-services.js';

export const weatherServices = {
    getWeather,
};
const weatherApiKey = `f67d62685d757100bd95f1aac4aa97bc`;

async function getWeather(location) {
    console.log(location);
    const ans = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&APPID=${weatherApiKey}`
    );
    const weatherDescription = ans.data.weather[0].description;
    return weatherDescription;
}