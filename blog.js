document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggle = document.querySelector('.theme-toggle');
    const fontSelector = document.querySelector('#font-selector');
    const body = document.body;
    const bgLayer1 = document.querySelector('#bg-layer-1');
    const bgLayer2 = document.querySelector('#bg-layer-2');
    const articlesContainer = document.querySelector('#articles-container');

    // Background slideshow
    const backgrounds = [
        'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1506104489822-562ca25152fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8NGslMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMGxvdWlzZXxlbnwwfHwwfHx8MA%3D%3D'
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

    // Set active navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'blog.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
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

    // Simulated database articles
    const articles = [
        {
            id: 1,
            title: 'Inovasi Terbaru dalam Teknologi AI',
            date: '2025-05-01',
            author: 'John Doe',
            image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=300',
            excerpt: 'Kecerdasan buatan terus berkembang dengan inovasi seperti model bahasa generatif dan pembelajaran mesin yang lebih efisien. Artikel ini menjelaskan tren terbaru dan dampaknya pada industri.'
        },
        {
            id: 2,
            title: 'Seni Digital: Menggabungkan Kreativitas dan Teknologi',
            date: '2025-04-28',
            author: 'Jane Smith',
            image: 'https://images.pexels.com/photos/3377405/pexels-photo-3377405.jpeg?auto=compress&cs=tinysrgb&h=300',
            excerpt: 'Seni digital telah mengubah cara seniman mengekspresikan diri. Dari lukisan digital hingga NFT, pelajari bagaimana teknologi membentuk dunia seni modern.'
        },
        {
            id: 3,
            title: 'Strategi Latihan untuk Maraton Pertama Anda',
            date: '2025-04-25',
            author: 'Mike Johnson',
            image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&h=300',
            excerpt: 'Menyiapkan diri untuk maraton membutuhkan perencanaan dan dedikasi. Artikel ini memberikan panduan langkah demi langkah untuk pelari pemula.'
        }
    ];

    // Render articles
    function renderArticles() {
        articlesContainer.innerHTML = '';
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article-card');
            articleElement.innerHTML = `
                <img src="${article.image}" alt="${article.title}" class="article-image">
                <div class="article-content">
                    <h3>${article.title}</h3>
                    <div class="article-meta">Oleh ${article.author} | ${article.date}</div>
                    <p>${article.excerpt}</p>
                    <a href="article.html?id=${article.id}" class="read-more">Baca Selengkapnya</a>
                </div>
            `;
            articlesContainer.appendChild(articleElement);
        });
    }

    renderArticles();
});
