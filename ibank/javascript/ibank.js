var slideIndex = 0;

var sliderWrapper = document.querySelector('li.slide');

var slides = document.querySelectorAll('li.slide');

var totalSlides = slides.length;

var sliderWidth = sliderWrapper.scrollWidth;

slides.forEach(function (element){
    element.style.width = sliderWidth + 'px';
})

var slider = document.querySelector('ul.slider');
slider.style.width = sliderWidth * totalSlides + 'px';


var next = document.querySelector('button.next');
var prev = document.querySelector('button.prev');

next.addEventListener('click', function(){
    plusSlides(1); 
});
prev.addEventListener('click', function(){
    plusSlides(-1);
});


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    slideIndex = n;
    if (slideIndex == -1) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex === totalSlides) {
        slideIndex = 0;
    }

    slider.style.marginLeft = -(sliderWidth * slideIndex) + 'px';
    
}