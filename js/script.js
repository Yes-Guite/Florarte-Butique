let currentIndex = 0;
const images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg"
];

const mainImage = document.getElementById("mainImage");

function changeImage() {
    mainImage.style.opacity = 0; 

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        mainImage.src = images[currentIndex];
        mainImage.style.opacity = 1; 
    }, 500); 
}

setInterval(changeImage, 4000); 
