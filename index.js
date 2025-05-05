// index.js

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });

    function loadPage(page) {
        const contentSection = document.getElementById('content-section');
        contentSection.innerHTML = `<h2>${page.charAt(0).toUpperCase() + page.slice(1)}</h2><p>Loading content for ${page}...</p>`;
        // Simulate loading content
        setTimeout(() => {
            contentSection.innerHTML = `<h2>${page.charAt(0).toUpperCase() + page.slice(1)}</h2><p>Content for ${page} goes here.</p>`;
        }, 1000);
    }
});
