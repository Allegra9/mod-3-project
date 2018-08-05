//adding service worker:
let note;
let notificationOn = false

//register service worker:
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js')
}

Notification.requestPermission(function(status) {
})

function displayNotification(item) {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then((reg) => {
      console.log(reg)
      const options = {
        body: item.name,
        icon: '/img/5-2-coconut-png-picture.png'
      };
      reg.showNotification('Todo', options);
    });
  }
}

function myTimer(event) {
  if (!notificationOn){
    event.target.className = "fas fa-bell"
    notificationOn = true
    note = setInterval(notification, 10000);
  }else {
    event.target.className = "fas fa-bell-slash"
    notificationOn = false
    console.log(note)
    clearInterval(note);
  }
}

function notification() {
  fetch('http://localhost:3000/api/v1/lists')
  .then(res => res.json())
  .then(data => data[Math.floor(Math.random() * data.length)])
  .then(item => displayNotification(item))
}

document.getElementById('push-notification').addEventListener('click', event => {
    myTimer(event)
})
