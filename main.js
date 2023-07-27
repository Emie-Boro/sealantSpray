const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.slider img')

let currentIndex = 0;
const interval = 3000;

function nextSlide() {
    currentIndex = (currentIndex + 1)% images.length
    updateSliderPosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1)% images.length
    updateSliderPosition();
}

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`
}


setInterval(nextSlide, interval)