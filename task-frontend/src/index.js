const numImagesAvailable = 982  //how many photos are total in the collection

const numItemsToGenerate = 1; //how many photos you want to display
// const imageWidth = 1434   //image width in pixels
// const imageHeight = 750   //image height in pixels
const collectionID = 928423  //FOG   //the collection ID from the original url

const galleryContainer = document.querySelector('.gallery-container')

function renderGalleryItem(randomNumber){
  fetch(`https://source.unsplash.com/collection/${collectionID}/?sig=${randomNumber}`)
    .then((response) => {
      console.log(response.url)
      document.body.style.backgroundImage = `url(${response.url})`;

      document.body.style.backgroundRepeat = "no-repeat"
      document.body.style.backgroundPosition = "top center"
      document.body.style.backgroundSize = "cover"
    })
  }

  console.log(window.innerWidth);
  console.log(window.innerHeight);

  for(let i=0; i < numItemsToGenerate; i++){
    let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);

    renderGalleryItem(randomImageIndex);
  }

//time
function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ampm = "";
    m = checkTime(m);
    checkDayTime(h);

 document.getElementById('time').innerHTML = h + ":" + m;
    let t = setTimeout(function(){startTime()}, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

let greeting = document.getElementById("greeting")

function checkDayTime(i){
  if (i < 12 && i >= 5){
    greeting.innerHTML = "Good morning"
  } else if (i >= 12  && i < 17){
    greeting.innerHTML = "Good afternoon"
  } else if (i >= 17 && i < 21){
    greeting.innerHTML = "Good evening"
  } else {
    greeting.innerHTML = "Sleep is so important. Why u here?"
  }
}

// Get Location
