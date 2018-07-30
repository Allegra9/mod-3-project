document.addEventListener('DOMContentLoaded', function(e){
  console.log('this file is linked')
})

document.getElementById("lists").addEventListener("click",function(e) {
// e.target was the clicked element
  if (e.target.className === 'delete-list') {
    // console.log("Anchor element clicked!");
    let targetId = e.target.id
    let elementToRemove = e.target.parentNode
    document.getElementById("lists").removeChild(elementToRemove)
    deleteOption(targetId)
    deleteList(targetId)
  }
});

const allLists = []
let id = 0

class List {
  constructor(name) {
    this.name = name
    id = ++id
    this.id = id
    allLists.push(this)
  }
}; // class


(function renderList(){
  const submitList = document.getElementById("submitList")
  submitList.addEventListener("click", (e) => {
    e.preventDefault()
    createList()
    createListContainer()
    addOption()
  })
})()

function getListName(){
  let name = document.getElementById("new-list-title").value
  return name
}

function setListId(){
  return allLists[allLists.length -1].id
}

function createList(){
  let newList = new List(getListName())
}

function createListContainer(){
  let nameElement = document.createElement('h3')
  nameElement.innerText = getListName()

  let element = document.createElement('div')
  element.id = `container-${setListId()}`
  element.appendChild(nameElement)
  element.appendChild(createDeleteButton())
  document.getElementById("lists").appendChild(element)
}

function addOption(){
  let parent = document.getElementById("parent-list")
  let element = document.createElement('option')
  element.id = setListId()
  element.innerText = getListName()
  parent.appendChild(element)
}

function createDeleteButton(){
  let deleteButton = document.createElement('button')
  deleteButton.innerText = "Delete"
  deleteButton.id = setListId()
  deleteButton.className = "delete-list"
  return deleteButton
}

function deleteOption(targetId){
  let options = document.getElementsByTagName('option')
  for (let option of options) {
  if (option.id == targetId){
      option.parentNode.removeChild(option)
    }
  }
}

function deleteList(id){
  for (let i=0; i < allLists.length; i++) {
    if (allLists[i].id == id) {
      allLists.splice(i, 1);
      console.log(allLists)
    }
  }
}
