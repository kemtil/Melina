// Get the modal
var imgModal = document.querySelector(".img-modal");
var images = document.querySelectorAll(".card-image");
var imgModalContent = imgModal.querySelector(".img-modal-content");

// Loop through all images and add click event listener
images.forEach(function(image) {
    image.addEventListener('click', function() {
        imgModal.style.display = "flex";
        imgModalContent.src = this.src;
    });
});

// Get the <span> element that closes the modal
var span = imgModal.querySelector(".img-close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    imgModal.style.display = "none";
}

// Close the modal when clicking outside the modal content
imgModal.onclick = function(event) {
    if (event.target == imgModal) {
        imgModal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == imgModal) {
        modal.style.display = "none";
    }
}