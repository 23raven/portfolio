document.querySelector('.tile-download').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'files/cv.pdf';
    link.download = 'cv.pdf';
    link.click();
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.project-buttons a img');

    images.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.setAttribute('data-original-src', this.src); // Save original src
            this.src = 'ic-github-project-active.png'; // Change to hover image
        });

        img.addEventListener('mouseout', function() {
            this.src = this.getAttribute('data-original-src'); // Restore original src
        });
    });
});