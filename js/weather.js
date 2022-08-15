const API_KEY = "68ef9fc4a1fd09d8c2b2c0b90d82b4bf";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metirc`
    fetch(url).then(response => response.json().then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
}

function onGeoError() {
    alert("cant find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);