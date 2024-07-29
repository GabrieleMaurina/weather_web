import axios from "axios";

const URL = "http://localhost:8000/weather";

function getWeather(callback) {
  axios
    .get(URL)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getWeather;
