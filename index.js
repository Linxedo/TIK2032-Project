document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const cards = document.querySelectorAll('.card');

    // Highlight active navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Card click handling
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent navigation if clicking the link itself
            if (e.target.classList.contains('card-link')) return;
            const link = card.getAttribute('data-link');
            if (link) {
                window.location.href = link;
            }
        });
    });
});
