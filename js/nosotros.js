let currentIndex = 0;
const images = [
    "img/11.jpg",
    "img/22.jpg",
    "img/33.jpg",
    "img/44.jpg",
    "img/55.jpg"
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
