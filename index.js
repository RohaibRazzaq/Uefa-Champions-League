document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('show');
        }
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });

});