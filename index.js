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
        'https://4kwallpapers.com/images/wallpapers/white-dog-mountains-lake-louise-clouds-pet-water-blue-5k-2560x1440-2432.jpg',
        'https://wallpapers.com/images/hd/2440x1440-nature-background-z6t44psuemi6tkc2.jpg',
        'https://www.itl.cat/pngfile/big/14-145567_beautiful-highresolution-desktop-wallpapers-25601440-nature-ultra-hd.jpg'
    ];

    // Preload images to avoid delays
    backgrounds.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    let currentBackground = 0;
    let activeLayer = bgLayer1;

    function changeBackground() {
        const nextLayer = activeLayer === bgLayer1 ? bgLayer2 : bgLayer1;
        nextLayer.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
        nextLayer.style.opacity = '1';
        activeLayer.style.opacity = '0';
        activeLayer = nextLayer;
        currentBackground = (currentBackground + 1) % backgrounds.length;
    }

    // Initialize first background
    bgLayer1.style.backgroundImage = `url('${backgrounds[currentBackground]}')`;
    bgLayer1.style.opacity = '1';
    bgLayer2.style.opacity = '0';
    currentBackground = (currentBackground + 1) % backgrounds.length;
    setInterval(changeBackground, 10000);

    // Highlight active navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // For testing; remove in production
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            // Uncomment in production: window.location.href = link.href;
        });
    });

    // Card click handling
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('card-link')) return;
            const link = card.querySelector('.card-link').href;
            if (link) window.location.href = link;
        });
    });

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        themeToggle.innerHTML = `<i class="fas ${isDark ? 'fa-sun' : 'fa-moon'}"></i>`;
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
    }

    // Font selection
    fontSelector.addEventListener('change', (e) => {
        body.style.fontFamily = `'${e.target.value}', sans-serif`;
        localStorage.setItem('font', e.target.value);
    });

    // Load saved font
    const savedFont = localStorage.getItem('font');
    if (savedFont) {
        body.style.fontFamily = `'${savedFont}', sans-serif`;
        fontSelector.value = savedFont;
    }

    // Smooth scroll for CTA button
    document.querySelector('.cta-button').addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector('.about');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
