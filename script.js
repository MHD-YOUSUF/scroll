document.addEventListener('DOMContentLoaded', () => {
    const revealContainer = document.getElementById('revealContainer');
    const reveal = revealContainer.querySelector('.reveal');

    function checkReveal() {
        const rect = revealContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            reveal.classList.add('show');
        } else {
            reveal.classList.remove('show');
        }
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Check on load in case already in view
});
