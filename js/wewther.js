const API_KEY = "46381bd041a3d99386885a43adf8bd56";


function onGeoOk(position) {
    const lat =position.coords.latitude;
    const lon =position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch (url).then(response=>response.json())
    .then(data=>{
        const weather = document.querySelector(".weather div:first-child")
        const city = document.querySelector(".weather div:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    console.log(url);
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);