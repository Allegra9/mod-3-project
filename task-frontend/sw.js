//SERVICE WORKER:

const cacheName = "first"

const filesToCache = [
  'index.html',
  'src/index.js',
  'css/style.css',
  'src/adapter.js',
  'src/list.js',
  'src/location.js',
  'img/beach.jpg',
  '/'      //this path will work offline aka home page
]
// key: value
// request: response

self.addEventListener('install', e => {
  console.log("sw installed!")
  e.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  )
})

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url)
  console.log("event", e)
  console.log(url.pathname)   //request.url   //url.pathname
  e.respondWith(caches.open(cacheName)
    .then(cache => cache.match(url.pathname))   //finds the file in cache
    .then(res => res || fetch(e.request))  //if not there, go to the network, sw will request it
  )
})
