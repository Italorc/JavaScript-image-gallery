function makeItBig(bigImg, caption) {
    //getting the path of the big image
    var largeImagePath = bigImg;

    //updating the image path in the element
    var largeImageElement = document.getElementById('largeImage');
    largeImageElement.src = largeImagePath;

    //displaying the image
    var largeImageContainer = document.getElementById('largeImageContainer');
    largeImageContainer.style.display = 'block';

    //uptading the figcaption
    var captionElement = document.getElementById('imgCaption');
    captionElement.textContent = caption;

}

