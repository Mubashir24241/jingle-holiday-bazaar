var currentImage = 1;
var totalImages = 4;

function previousImage() {
    if (currentImage > 1) {
        currentImage--;
    } else {
        currentImage = totalImages;
    }
    updateImage();
}

function nextImage() {
    if (currentImage < totalImages) {
        currentImage++;
    } else {
        currentImage = 1;
    }
    updateImage();
}

function updateImage() {
    var imageElement = document.querySelector('.slider-image');
    imageElement.src = 'image' + currentImage + '.webp';
    imageElement.alt = 'Image ' + currentImage;
}