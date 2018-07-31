let lastId
document.getElementById("lists").addEventListener("click", function(e) {
lastListId()
  // Render all list items
  if (e.target.id === 'show-all-lists') {
    Adapter.getLists()
  }

  // Create new list item
  else if (e.target.id === 'add-list-item') {
    e.preventDefault()
    let newListName = document.getElementById('new-list-title').value
    document.getElementById('all-lists').innerHTML += `
      <div id="list-${lastId}">
        <span id="list-name">${newListName}</span>
        <div id="list-button-container">
          <button class="delete-list fas fa-times"></button>
          <button class="edit-list fas fa-edit"></button>
          <button class="fas fa-plus"></button>
        </div>
        <ul class="tasks" id="tasks">
        </ul>
      </div>`
    Adapter.createList({name:newListName})
  }

  // Delete list item
  else if (e.target.className.includes("delete-list")) {
    let listItemId = parseInt(e.target.parentNode.parentNode.id.substring(5))
    Adapter.deleteList(listItemId)
    document.getElementById("all-lists").removeChild(e.target.parentNode.parentNode)
  }

  // Show edit list item form
  else if (e.target.className.includes("edit-list")) {
    let listItemId = parseInt(e.target.parentNode.parentNode.id.substring(5))
    let listName = e.target.parentNode.parentNode.children[0].innerText
    e.target.parentNode.parentNode.children[0].innerHTML = `
    <form id="edit-list-form">
      <input required type="text" id="edit-list-name" value=${listName}>
      <button type="submit" id="submit-edit" class="fas fa-check"></button>
      <button id="edit-list-cancel" class="fas fa-ban"></button>
    </form>`
  }

  // Edit list item and re-render the list of lists
  else if (e.target.id === "submit-edit") {
    let listParent = e.target.parentNode.parentNode.parentNode
    let listItemId = parseInt(listParent.id.substring(5))
    e.preventDefault()
    let editedValue = listParent.querySelector('#edit-list-name').value
    listParent.children[0].innerText = `${editedValue}`
    Adapter.editList(listItemId, {name: editedValue})
  }

  // Cancel editing list item
  else if (e.target.id === "edit-list-cancel"){
    e.preventDefault()
    let listParent = e.target.parentNode.parentNode.parentNode
    console.log(listParent)
    let listItemId = parseInt(listParent.id.substring(5))
    let value = e.target.parentNode.children[0].value
    console.log(value)
    listParent.children[0].innerText = value
  }

});

function renderLists(data) {
  document.getElementById('all-lists').innerHTML = ""
  for (let listItem of data) {
    document.getElementById('all-lists').innerHTML += `
      <div id="list-${listItem.id}">
        <button class="check-list fas fa-check"></button>
        <span id="list-name">${listItem.name}</span>
        <span id="list-button-container">
          <button class="edit-list fas fa-edit"></button>
          <button class="delete-list fas fa-times"></button>
        </span>
      </div>`
  }
}

function setLastId(data) {
  lastId = data[data.length-1].id + 1
}

function lastListId() {
  fetch('http://localhost:3000/api/v1/lists')
  .then(res => res.json())
  .then(data => setLastId(data))
}
