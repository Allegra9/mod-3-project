class Adapter{
  static getTasks() {
  URL = 'http://localhost/api/v1/tasks'
    fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data))
  }

  static getLists() {
  URL = 'http://localhost/api/v1/lists'
    fetch(URL)
    .then(res => res.json())
    .then(data => console.log(data))
  }

}
