let input = document.querySelector(".ville-form input");
let button = document.querySelector(".ville-form button");
let temperature = document.querySelector(".temperature h2");
let ville = document.querySelector(".ville h3");
let temp = document.querySelector(".ville h4");

const proxy = "https://cors-anywhere.herouapp.com/";
button.addEventListener("click", function () {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value},fr&appid=ababab4a005dbe59f3ef69195ce56d55`;
  fetch(api)
    .then(function (resp) {
      let data = resp.json();
      return data;
    })
    .then(function (data) {
      console.log(data);
      console.log(data.name);
      let weather = data.weather;
      let temperatureKelvin = data.main.temp;
      let temperatureC = temperatureKelvin - 273.1;

      console.log(weather);
      console.log(weather[0].main);
      temp.textContent = weather[0].main;
      ville.textContent = data.name;
      temperature.textContent = Math.floor(temperatureC);
    });
});
