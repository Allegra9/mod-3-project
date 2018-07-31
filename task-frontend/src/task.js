// document.addEventListener('DOMContentLoaded', function(e){
// })
//
// document.getElementById("all-lists").addEventListener("click",function(e) {
//   if (e.target.id("list-name")){
//     let listId = parseInt(e.target.parentNode.parentNode.id.substring(5))
//     Adapter.getListTasks(listId)
//   }
//
//
//   if (e.target.className.includes("delete-list")) {
//     let listItemId = parseInt(e.target.parentNode.parentNode.id.substring(5))
//     Adapter.deleteList(listItemId)
//     document.getElementById("all-lists").removeChild(e.target.parentNode.parentNode)
//   }
//   else if (e.target.className.includes("edit-list")) {
//     let listItemId = parseInt(e.target.parentNode.parentNode.id.substring(5))
//     let listName = e.target.parentNode.parentNode.children[0].innerText
//     e.target.parentNode.parentNode.children[0].innerHTML = `
//     <form id="edit-list-form">
//       <input required type="text" id="edit-list-name" placeholder=${listName}>
//       <button type="submit" id="edit-list" class="fas fa-check"></button>
//       <button id="edit-list-cancel" class="fas fa-ban"></button>
//     </form>`
//   }
//
//   else if (e.target.id === "edit-list") {
//     let listItemId = parseInt(e.target.parentNode.parentNode.parentNode.id.substring(5))
//     e.preventDefault()
//     Adapter.editList(listItemId, editListName())
//   }
//
//   else if (e.target.id === "edit-list-cancel"){
//     e.preventDefault()
//     let listItemId = parseInt(e.target.parentNode.parentNode.parentNode.id.substring(5))
//     e.target.parentNode.parentNode.children[0].innerHTML = `<span>${Adapter.getList(listItemId)}</span>`
//   }
// });
//
//
// document.getElementById('add-list-item').addEventListener('click', function() {
//   Adapter.createList(newListName())
// });
//
// function renderListTasks(data) {
//   document.getElementById('all-lists').innerHTML = ""
//   for (let listItem of data) {
//     document.getElementById('all-lists').innerHTML += `
//       <div id="list-${listItem.id}">
//         <span>${listItem.name}</span>
//         <div class="list-button-container">
//           <button class="delete-list fas fa-times"></button>
//           <button class="edit-list fas fa-edit"></button>
//           <button class="fas fa-plus"></button>
//         </div>
//         <ul class="tasks" id="tasks">
//         </ul>
//       </div>`
//   }
// }
//
//
// function newTaskName(){
//   return {name: document.getElementById("new-task-title").value}
// }
//
// function editTaskName(){
//   return {name: document.getElementById("edit-list-name").value}
// }
