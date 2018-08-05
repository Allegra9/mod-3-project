let lastId
let toggleList = false

document.getElementById("lists").addEventListener("click", function(e) {
lastListId()

  // show all lists
  if (e.target.id === 'show-all-lists') {
    if (toggleList === false){
      toggleList = true
      Adapter.getLists()
    }
    else {
      toggleList = false
      document.getElementById('all-lists').innerHTML = ""
    }
  }
  // Create new list item
  else if (e.target.id === 'add-list-item') {
    e.preventDefault()
    let newListName = document.getElementById('new-list-title').value
    document.getElementById('all-lists').innerHTML += `
      <div id="list-${lastId}">
        <input class="check-list" type="checkbox">
        <span id="list-name">${newListName}</span>
        <span id="list-button-container">
          <button class="edit-list fas fa-edit" style="background:transparent; border:none" title="edit"></button>
          <button class="delete-list fas fa-times" style="background:transparent; border:none" title="delete"></button>
        </span>
      </div>`
      document.getElementById('new-list-title').value = ""
    Adapter.createList({name: newListName, checked: "false"})
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
      <input required type="text" id="edit-list-name" value="${listName}">
      <button type="submit" id="submit-edit" class="fas fa-check" style="background:transparent; border:none"></button>
      <button id="edit-list-cancel" class="fas fa-ban" style="background:transparent; border:none"></button>
    </form>`
    //console.log(e.target.parentNode.parentNode.id)   // list-21
    let clickedItem = document.getElementById(`${e.target.parentNode.parentNode.id}`)
    //console.log(clickedItem.children[2])
    //edit and delete buttons are hidden on edit click:
    clickedItem.children[2].style.visibility = "hidden"
  }

  // Edit list item and re-render the list of lists
  else if (e.target.id === "submit-edit") {
    let listParent = e.target.parentNode.parentNode.parentNode
    //brings back edit & delete buttons:
    listParent.children[2].style.visibility = "visible"
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
    //brings back edit & delete buttons:
    listParent.children[2].style.visibility = "visible"
    let listItemId = parseInt(listParent.id.substring(5))
    let value = e.target.parentNode.children[0].value
    //console.log(value)
    listParent.children[1].innerText = value
  }

  // Toggle checked list item names
  else if (e.target.className === "check-list") {
    let sibling = e.target.parentNode.children[1]
    console.log(sibling)
    let listItemId = parseInt(e.target.parentNode.id.substring(5))
    console.log(listItemId)

    if (sibling.style.textDecoration === "line-through"){
      sibling.style.textDecoration = "none"
      sibling.style.color = "#fff"
      !e.target.checked
      Adapter.editList(listItemId, {checked: "false"})
    }
    else {
      console.log(listItemId)
      sibling.style.textDecoration = "line-through"
      sibling.style.color = "grey"       // added color
      console.log(e.target)
      e.target.checked = "true"
      Adapter.editList(listItemId,{checked: "true"})
    }
  }

});

function renderLists(data) {
  document.getElementById('all-lists').innerHTML = ""
  for (let listItem of data) {

    document.getElementById('all-lists').innerHTML += `
      <div id="list-${listItem.id}">
        <input class="check-list" type="checkbox" ${listItem.checked === "true" && "checked"}>
        <span id="list-name" ${listItem.checked === "true" && 'style="text-decoration:line-through; color:grey;"'}>${listItem.name}</span>
        <span id="list-button-container">
          <button class="edit-list fas fa-edit" style="background:transparent; border:none" title="edit"></button>
          <button class="delete-list fas fa-times" style="background:transparent; border:none" title="delete"></button>
        </span>
      </div>`
  }
}

function setLastId(data) {
  if (data.length === 0){
    lastId = 1
  } else {
    lastId = data[data.length-1].id + 1
  }
}

function lastListId() {
  fetch('http://localhost:3000/api/v1/lists')
  .then(res => res.json())
  .then(data => setLastId(data))
}
