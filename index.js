document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeBtn');

    hamburger.addEventListener('click', () => {
        mobileMenu.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === mobileMenu) {
            mobileMenu.style.display = 'none';
        }
    });
});