document.addEventListener('DOMContentLoaded', init)
URL = 'http://localhost/api/v1/tasks'
function init () {
  fetch(URL)
  .then(res => res.json())
  .then(data => console.log(data))
}


document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  //const app = new TaskLister();
});
