window.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('mainNav');

    function handleImageVisibility() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 700) {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'grid';
        }
    }

    // Initial execution of the function
    handleImageVisibility();

    // Event listener for resizing the window
    window.addEventListener('resize', () => {
        handleImageVisibility();
    });
});