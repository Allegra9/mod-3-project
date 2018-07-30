document.getElementById("lists").addEventListener("click",function(e) {
// e.target was the clicked element
  if (e.target.className === 'delete-task') {
    // console.log("Anchor element clicked!");
    let targetId = e.target.id
    let elementToRemove = e.target.parentNode
    document.getElementById(`container-${findTask(targetId).listId}`).removeChild(elementToRemove)
    deleteTask(targetId)
  }
});


const allTasks = []
let taskId = 0

class Task {
  constructor(listId, description, priority) {
    this.listId = listId
    this.description = description
    this.priority = priority
    taskId = ++taskId
    this.taskId = taskId
    allTasks.push(this)
  }
}; // class

(function renderList(){
  const submitTask = document.getElementById("taskButton")
  submitTask.addEventListener("click", (e) => {
    e.preventDefault()
    createTask()
    createTaskContainer()

  })
})()

function setTaskId(){
  return allTasks[allTasks.length -1].taskId
}

function getTaskListId(){
  const options = document.querySelectorAll('option')
  let id

  for (let i = 0; i < options.length; i++){
    if (options[i].selected === true){
      id = parseInt(options[i].id)
      break
    }
  }
  return id
}

function getTaskDescription(){
  let description = document.getElementById("new-task-description").value
  return description
}

function getTaskPriority(){
  let priority = document.getElementById("new-task-priority").value
  return priority
}

function createTask(){
  let newTask = new Task(getTaskListId(), getTaskDescription(), getTaskPriority())
  console.log(newTask)
}

function createTaskContainer(){
  let taskElement = document.createElement('div')
  let taskDescription = document.createElement('p')
  let taskPriority = document.createElement('p')
  taskDescription.innerText = getTaskDescription()
  taskPriority.innerText = getTaskPriority()
  taskElement.appendChild(taskDescription)
  taskElement.appendChild(taskPriority)
  taskElement.appendChild(createTaskDeleteButton())

  document.getElementById(`container-${getTaskListId()}`).appendChild(taskElement)

  console.log(taskElement)
}

function createTaskDeleteButton(){
  let deleteButton = document.createElement('button')
  deleteButton.innerText = "X"
  deleteButton.id = setTaskId()
  deleteButton.className = "delete-task"
  return deleteButton
}

function findTask(id){
  allTasks
  for (let i = 0; i < allTasks.length; i++){
    if (allTasks[i].taskId === parseInt(id)){
      console.log(allTasks[i])
      return allTasks[i]
    }
  }
}

function deleteTask(id){
  let task = findTask(id)
  console.log(task)
  index = allTasks.indexOf(task)
  console.log(index)
  allTasks.splice(index, 1)
}
