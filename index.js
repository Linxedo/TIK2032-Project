// Cyberpunk Style Animations
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('mouseenter', () => {
        anchor.style.transition = '0.2s ease-in-out';
        anchor.style.transform = 'scale(1.1)';
    });

    anchor.addEventListener('mouseleave', () => {
        anchor.style.transition = '0.2s ease-in-out';
        anchor.style.transform = 'scale(1)';
    });
});

// Scroll animation on clicking anchors
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement ? targetElement.offsetTop - 20 : 0,
            behavior: 'smooth'
        });
    });
});
