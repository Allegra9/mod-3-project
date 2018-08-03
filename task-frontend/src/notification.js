//adding service worker:
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js')
}

// Notification.requestPermission(function(status) {
//     console.log("displayNotification is run")
//     console.log('Notification permission status:', status);
// });

function displayNotification(item) {
  console.log("displayNotification is run")
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      var options = {
        body: item.name,
        icon: '/img/5-2-coconut-png-picture.png'
      };
      reg.showNotification('Todo', options);
    });
  }
}

setInterval(notification, 500000000);

function notification() {
  console.log("showNotification is run")
  fetch('http://localhost:3000/api/v1/lists')
  .then(res => res.json())
  .then(data => data[Math.floor(Math.random() * destinations.length)])
  .then(item => displayNotification(item))
}
