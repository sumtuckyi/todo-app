const API_KEY = "945ff14170ebab594815438f310b3189";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lgt = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgt}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    }); // 자바스크립트가 url을 불러옴 
}
 function onGeoErr(){
    alert("can't find you. no weather for you.");
 }

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);

