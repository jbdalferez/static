// Simple image slider for projects
const images = document.querySelectorAll('.img-fluid');
let currentIndex = 0;
setInterval(() => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}, 3000);