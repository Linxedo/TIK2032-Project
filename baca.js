document.addEventListener('DOMContentLoaded', () => {
    const bgLayer1 = document.querySelector('#bg-layer-1');
    const bgLayer2 = document.querySelector('#bg-layer-2');
    const fontSelector = document.getElementById('font-selector');
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    const backgrounds = [
        'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1506104489822-562ca25152fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8NGslMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMGxvdWlzZXxlbnwwfHwwfHx8MA%3D%3D'
    ];

    let currentBackground = 0;
    let activeLayer = bgLayer1;
    let imagesLoaded = 0;

    // Preload images and set initial background
    const preloadImages = () => {
        const imagePromises = backgrounds.map((src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => resolve(src);
                img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
            });
        });

        Promise.all(imagePromises)
            .then(() => {
                // Set the first background immediately without transition
                bgLayer1.style.transition = 'none'; // Disable transition for initial load
                bgLayer1.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
                bgLayer1.style.opacity = '1';
                currentBackground = (currentBackground + 1) % backgrounds.length;

                // Re-enable transition after initial load
                setTimeout(() => {
                    bgLayer1.style.transition = 'opacity 2s ease-in-out';
                    setInterval(changeBackground, 10000); // Start transition loop
                }, 100); // Small delay to ensure initial render
            })
            .catch((error) => {
                console.error(error);
                // Fallback: Set the first background even if some images fail
                bgLayer1.style.transition = 'none';
                bgLayer1.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
                bgLayer1.style.opacity = '1';
                currentBackground = (currentBackground + 1) % backgrounds.length;
                setTimeout(() => {
                    bgLayer1.style.transition = 'opacity 2s ease-in-out';
                    setInterval(changeBackground, 10000);
                }, 100);
            });
    };

    function changeBackground() {
        const nextLayer = activeLayer === bgLayer1 ? bgLayer2 : bgLayer1;
        nextLayer.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
        nextLayer.style.opacity = '1';
        activeLayer.style.opacity = '0';
        activeLayer = nextLayer;
        currentBackground = (currentBackground + 1) % backgrounds.length;
    }

    // Start preloading images
    preloadImages();

    // Font selection
    fontSelector.addEventListener('change', (e) => {
        body.style.fontFamily = e.target.value + ', sans-serif';
    });

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
});
