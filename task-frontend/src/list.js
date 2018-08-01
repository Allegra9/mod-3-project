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
        <input class="check-list" id="check-list" type="checkbox">
        <span id="list-name">${newListName}</span>
        <span id="list-button-container">
          <button class="edit-list fas fa-edit"></button>
          <button class="delete-list fas fa-times"></button>
        </span>
        <ul class="tasks" id="tasks">
        </ul>
      </div>`
      document.getElementById('new-list-title').value = ""
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
    let listName = e.target.parentNode.parentNode.children[1].innerText
    e.target.parentNode.parentNode.children[1].innerHTML = `
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
    listParent.children[1].innerText = `${editedValue}`
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
    listParent.children[1].innerText = value
  }

  // Toggle checked list item names
  else if (e.target.id === "check-list") {
    let sibling = e.target.parentNode.children[1]
    let listItemId = parseInt(e.target.parentNode.id.substring(5))
    if (sibling.style.textDecoration === "line-through"){
      console.log(sibling)
      console.log(listItemId)

      sibling.style.textDecoration = "none"
      !e.target.checked
      Adapter.editList(listItemId,{checked: "false"})
    }
    else {
      console.log(listItemId)
      sibling.style.textDecoration = "line-through"
      console.log(e.target)
      e.target.checked
      Adapter.editList(listItemId,{checked: "true"})
    }
  }

});
function renderLists(data) {
  document.getElementById('all-lists').innerHTML = ""
  for (let listItem of data) {

    let listName = document.createElement('span')
    let checkbox = document.createElement('input')

    checkbox.className = "check-list"
    checkbox.id = "check-list"
    checkbox.type = "checkbox"

    listName.innerText = listItem.name
    listName.id = "list-name"

    if (listItem.checked === "true") {
      listName.style.textDecoration = "line-through"
      checkbox.checked = true
    }

    document.getElementById('all-lists').innerHTML += `
      <div id="list-${listItem.id}">
        <span id="list-button-container">
          <button class="edit-list fas fa-edit"></button>
          <button class="delete-list fas fa-times"></button>
        </span>
      </div>`

    document.getElementById(`list-${listItem.id}`).prepend(checkbox, listName)

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
