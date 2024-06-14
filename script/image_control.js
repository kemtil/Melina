// Get the modal
var modal = document.querySelector(".modal");
var images = document.querySelectorAll(".card-image");
var modalImg = modal.querySelector(".modal-content");

// Loop through all images and add click event listener
images.forEach(function(image) {
    image.addEventListener('click', function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

// Get the <span> element that closes the modal
var span = modal.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Close the modal when clicking outside the modal content
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}