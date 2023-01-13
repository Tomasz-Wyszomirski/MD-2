const hSix = document.getElementsByTagName('h6');
const test = document.getElementById('test');

function geoip(data){
    if(data.country === 'Poland') {
      for(let i = 0; i < hSix.length; i++) {
        hSix[i].innerHTML = 'wiejski domek';
      }
      test.style.background = 'burlywood';
      }
    
    if(data.country === 'Netherlands') {
      for(let i = 0; i < hSix.length; i++) {
        hSix[i].innerHTML = 'huisje huis';
      }
      test.style.background = 'red';
      }

    if(data.country === 'Italy') {
      for(let i = 0; i < hSix.length; i++) {
        hSix[i].innerHTML = 'casaletto';
      }
}};


const sliderImages = document.getElementsByClassName('slide'),
  arrowLeft = document.getElementById('previous-arrow'),
  arrowRight = document.getElementById('next-arrow'),
  picCounters = document.getElementsByClassName('pic-counter');
  
  current = 0;
  
// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.opacity = '0';
    picCounters[i].style.opacity = '0';
    }
}
  
// Initial slide
function startSlide() {
  reset();
  sliderImages[0].style.opacity = '1';
  picCounters[0].style.opacity = '1';
}

// Show previous
function slideLeft() {
    reset();
    sliderImages[current - 1].style.opacity = '1';
    picCounters[current - 1].style.opacity = '1';
    current--;
  }
    
// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.opacity = '1';
    picCounters[current + 1].style.opacity = '1';
    current++;
  }
    
  // Left arrow click
  arrowLeft.addEventListener("click", function () {
    if (current === 0) {
      current = sliderImages.length;
    }
    slideLeft();
     
  });

 // Right arrow click
arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
     
  });

  
    
 startSlide();
