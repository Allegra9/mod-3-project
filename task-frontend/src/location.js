let locationContainer = document.getElementById("location")

const destinations = [["Mexico","mx"],["Malaga","mala"], ["Lisbon","lisb"], ["Verona","vero"],
["Marseille", "mars"], ["Los Angeles","laxa"], ["Melbourne","mela"]]

const travelUrl = `https://www.skyscanner.net/transport/flights/lond`
document.addEventListener('DOMContentLoaded', changeLocation)

function changeLocation() {
  setInterval(setLocation, 5000);
}

//when clicked on location, call addPassport func
function setLocation() {
  let rand = destinations[Math.floor(Math.random() * destinations.length)];
  locationContainer.innerHTML = `<a class="location-name" target="_blank" href=${travelUrl}/${rand[1]}>${rand[0]}</a>`
  let locationName = document.querySelector('.location-name')
  locationName.addEventListener('click', addPassport)
  getWeather(rand)
}

//create a new task "take PASSPORT !!!!"  +
function addPassport(e){
  let newListName = document.getElementById('new-list-title').value
  document.getElementById('all-lists').innerHTML += `
    <div id="list-${lastId}">
      <input class="check-list" type="checkbox">
      <span id="list-name">take PASSPORT !!!!</span>
      <span id="list-button-container">
        <button class="edit-list fas fa-edit" style="background:transparent; border:none" title="edit"></button>
        <button class="delete-list fas fa-times" style="background:transparent; border:none" title="delete"></button>
      </span>
    </div>`

    console.log(lastId)
    document.getElementById('new-list-title').value = ""
  Adapter.createList({name: "take PASSPORT !!!!", checked: "false"})
      .then(Adapter.getLists())
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
