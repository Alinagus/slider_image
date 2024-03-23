const images = [
    {
    text: 'Rostov-on-Don LCD admiral',
    time: '3.5 months',
    area: '81 m2',
    url: "img/image-1.svg"
},
{
    text: 'Sochi Thieves',
    time: '4 months',
    area: '105 m2',
    url: 'img/image-2.png'
},
{
    text: 'Rostov-on-Don Patriotic',
    time: '3 months',
    area: '93 m2',
    url: 'img/image-3.png'
}
]

function initSlider(options) {
  if (!images || !images.length) return;
    
  
  let sliderImages = document.querySelector(".box__image_slider");
  let sliderArrows = document.querySelectorAll(".slider_arrow");
  let sliderDots = document.querySelector('.slider_dots')
  const text = document.querySelector(".city");
  const time = document.querySelector(".time");
  const area = document.querySelector(".area")

  
  initImages();
  initArrows();

  if (options.dots) {
    initDots();
  }
  if (options.titles) {
    initTitles();
  }
  
  
  
function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image: url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  
function initArrows() {
    sliderArrows.forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("prev")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } 
        else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        NextText(nextNumber);
        slideText(nextNumber);
        moveSlider(nextNumber);
      });
    });
  }

  

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`
    sliderDots.innerHTML += dot;
  });
  sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
    dot.addEventListener("click", function() {

      ind = this.dataset.index;
      NextText(ind)
      slideText(ind)
      moveSlider(ind)
    })
  })
}

function slideText(index){
      sliderDots.querySelector(".active")
      changeText = document.querySelector(`.num${index}`);
      changeText.className += ' active';

  }

function NextText(num){
  text.innerText = images[num].text;
  time.innerText = images[num].time;
  area.innerText = images[num].area;
}

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");


    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");

    }
  }
}

let sliderOptions = {
  dots: true,

};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});


