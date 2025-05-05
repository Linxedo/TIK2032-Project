document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const cards = document.querySelectorAll('.card');
    const themeToggle = document.querySelector('.theme-toggle');
    const fontSelector = document.querySelector('#font-selector');
    const body = document.body;
    const bgLayer1 = document.querySelector('#bg-layer-1');
    const bgLayer2 = document.querySelector('#bg-layer-2');

    // Background slideshow
    const backgrounds = [
        'https://images.unsplash.com/photo-1507521628349-dee6b874e9e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
    ];

    // Preload images to avoid delays
    const preloadImages = () => {
        return Promise.all(backgrounds.map(src => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
            });
        }));
    };

    preloadImages().then(() => {
        // Set initial background
        bgLayer1.style.backgroundImage = `url('${backgrounds[0]}')`;
        bgLayer1.style.opacity = '1';
        bgLayer2.style.opacity = '0';

        let currentBackground = 1; // Start with second image
        let activeLayer = bgLayer1;

        function changeBackground() {
            const nextLayer = activeLayer === bgLayer1 ? bgLayer2 : bgLayer1;
            nextLayer.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
            nextLayer.style.opacity = '1';
            activeLayer.style.opacity = '0';
            activeLayer = nextLayer;
            currentBackground = (currentBackground + 1) % backgrounds.length;
        }

        // Start slideshow
        setInterval(changeBackground, 10000);
    });

    // ... (rest of your existing code)
});
