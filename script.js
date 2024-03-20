const images = [
    {
    text: 'Rostov-on-Don LCD admiral',
    time: '3.5 months',
    area: '81 m2',
    url: 'https://img.freepik.com/free-photo/a-painting-of-a-mountain-lake-with-a-mountain-in-the-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.967060102.1710720000&semt=ais'
},
{
    text: 'Sochi Thieves',
    time: '4 months',
    area: '105 m2',
    url: 'https://avatars.mds.yandex.net/i?id=bb6f43ed6751b908e678f9081d830a85_l-4821174-images-thumbs&n=27&h=480&w=480'
},
{
    text: 'Rostov-on-Don Patriotic',
    time: '3 months',
    area: '93 m2',
    url: 'https://avatars.mds.yandex.net/i?id=1090e8456477d0a8a1786e57311c13a3_l-5207778-images-thumbs&n=27&h=480&w=480'
}
]


function initSlider() {
  if (!images || !images.length) return;
  

  
  let sliderImages = document.querySelector(".box__image_slider");
  let sliderArrows = document.querySelector(".slider_arrow");
  
  initImages();
  initArrows();
  
  
  
  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll(".slider_arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
  } 
 
}
document.addEventListener("DOMContentLoaded", initSlider);


