// 
// let locationContainer = document.getElementById("location")
//
// const destinations = [["Mexico","mx"],["Malaga","mala"], ["Lisbon","lisb"], ["Verona","vero"],
// ["Marseille", "mars"], ["Los Angeles","laxa"], ["Melbourne","mela"]]
//
// const travelUrl = `https://www.skyscanner.net/transport/flights/lond`
// document.addEventListener('DOMContentLoaded', changeLocation)
//
// function changeLocation() {
//   setInterval(setLocation, 50000000000);
// }
//
// function setLocation() {
//   let rand = destinations[Math.floor(Math.random() * destinations.length)];
//   locationContainer.innerHTML = `<a class="location-name" target="_blank" href=${travelUrl}/${rand[1]}>${rand[0]}</a>`
//   getWeather(rand)
// }
//
// function getWeather(location) {
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${location[0]}&APPID=55219e014878a0eda0e90952b079527d`
//   fetch(url)
//   .then(res => res.json())
//   .then(data => renderWeather(data))
// }
//
// function renderWeather(data) {
//   let temp = (data.main.temp - 273.15).toFixed(0)
//   let h3 = document.createElement('h3')
//   h3.style.color = "#fff"
//
//   h3.innerText = `${temp} °C`
//   locationContainer.prepend(h3)
// }
