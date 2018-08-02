
const listUrl = 'http://localhost:3000/api/v1/lists'

class Adapter{
  static getLists() {
    console.log("GetLists called")
    fetch('http://localhost:3000/api/v1/lists')
    .then(res => res.json())
    .then(data => data.sort((a, b) => a.id - b.id))
    .then(data => renderLists(data))
  }

  static getList(id) {
    fetch(`${listUrl}/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }

  static  editList(id, body) {
    console.log("EditList Called")
    fetch(`${listUrl}/${id}`,{
      method: 'PATCH',
      body: JSON.stringify(body),
      headers:{'Content-type':'application/json'}
    })
    .then(res => res.json())
    .then(data => console.log(data))

  }

  static deleteList(id) {
    fetch(`${listUrl}/${id}`, {
      method: 'DELETE'
    })
  }

  static createList(body) {
    fetch(listUrl,{
      method: 'POST',
      body: JSON.stringify(body),
      headers:{'Content-type':'application/json'}
    })
  }

}
