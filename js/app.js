const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar');

const mainSlides = document.querySelector('.main-slide');
const slidesCount = mainSlides.querySelectorAll('div').length;

let activeSlideIndex = 0;
const container = document.querySelector('.container');
const height = container.clientHeight;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
  changeActiveSlideIndex('up');  
})

downBtn.addEventListener('click', () => {
  changeActiveSlideIndex('down');  
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' || event.key === 'w' || event.key === 'ц' ){
    changeActiveSlideIndex('up');
  } else if (event.key === 'ArrowDown' || event.key === 's' || event.key === 'і' || event.key === 'ы'){
    changeActiveSlideIndex('down');
  }
})



function changeActiveSlideIndex(direction) {
  if (direction === 'up') {    
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount){
      activeSlideIndex = 0;
    }    
  } else {
    console.log('-');
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }     
  }  


mainSlides.style.transform = `translateY(-${activeSlideIndex * height}px)`;
sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
