//adding service worker:

let locationContainer = document.getElementById("location")

const destinations = [["Mexico","mx"],["Malaga","mala"], ["Lisbon","lisb"], ["Verona","vero"],
["Marseille", "mars"], ["Los Angeles","laxa"], ["Melbourne","mela"]]

const travelUrl = `https://www.skyscanner.net/transport/flights/lond`
document.addEventListener('DOMContentLoaded', changeLocation)

function changeLocation() {
  setInterval(setLocation, 5000);
}

function setLocation() {
  let rand = destinations[Math.floor(Math.random() * destinations.length)];
  locationContainer.innerHTML = `<a class="location-name" target="_blank" href=${travelUrl}/${rand[1]}>${rand[0]}</a>`
  getWeather(rand)
}

function getWeather(location) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location[0]}&APPID=55219e014878a0eda0e90952b079527d`
  console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(data => renderWeather(data))
}

function renderWeather(data) {
  let temp = (data.main.temp - 273.15).toFixed(0)
  let h3 = document.createElement('h3')
  h3.style.color = "#fff"

  h3.innerText = `${temp} °C`
  locationContainer.prepend(h3)
}


// `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.712784,-74.005941&rankby=distance&type=airport&key=<Your API Key>`
// //
// // `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.712784,-74.005941&radius=50000&type=airport&key=<Your API Key>`
//
// let lat, lng
// let  options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0
// };
//
// function success(pos) {
//   var crd = pos.coords;
//
//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }
//
// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }
//
// navigator.geolocation.getCurrentPosition(success, error);

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         console.log("Geolocation is not supported by this browser.")
//     }
// }
//
// function showPosition(position) {
//     lat = position.coords.latitude
//     lng = position.coords.longitude
//     getNearestAirport(lat,lng)
// }
// getLocation()
//
// // These code snippets use an open-source library. http://unirest.io/nodejs
//
//
// function getNearestAirport (lat, lng) {
//   url = `https://cometari-airportsfinder-v1.p.mashape.com/api/airports/by-radius?lat=${lat}lng=${lng}&radius=50`
//   fetch(url, {
//     headers: {"X-Mashape-Key": "xriN3fhwD8msh12Xie8YSM9Wybmmp1KlB5Wjsne5z9RNt4ajwx",
//     "Content-type": "application/json" }
//   })
//   .then(res => res.json())
//   .then(data => console.log(data))
// }
