window.addEventListener('DOMContentLoaded', () => {
    const aboutImg = document.getElementById('aboutImg');
    const imagePlace = document.getElementById('imagePlace');

    function handleImageVisibility() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 800) {
            aboutImg.style.display = 'none';
            imagePlace.style.display = 'block'; // Show the image placeholder
        } else {
            aboutImg.style.display = 'block';
            imagePlace.style.display = 'none'; // Hide the image placeholder
        }
    }

    // Initial execution of the function
    handleImageVisibility();

    // Event listener for resizing the window
    window.addEventListener('resize', () => {
        handleImageVisibility();
    });
});