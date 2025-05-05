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

    // Simulated database of articles
    const articles = [
        {
            id: 1,
            title: 'Masa Depan Kecerdasan Buatan',
            category: 'Teknologi',
            date: '2025-05-01',
            image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=300',
            content: `
                Kecerdasan buatan (AI) telah berkembang pesat dalam beberapa tahun terakhir, mengubah cara kita berinteraksi dengan teknologi. Dari asisten virtual hingga mobil otonom, AI kini menjadi bagian integral dari kehidupan sehari-hari. Salah satu tren terbesar adalah kemajuan dalam pembelajaran mesin, yang memungkinkan sistem untuk belajar dari data tanpa pemrograman eksplisit.

                Namun, ada tantangan besar yang menyertai perkembangan ini, termasuk isu etika, privasi, dan potensi pengangguran akibat otomatisasi. Para peneliti sedang bekerja untuk menciptakan AI yang lebih transparan dan bertanggung jawab, memastikan bahwa teknologi ini memberikan manfaat tanpa menimbulkan risiko yang tidak perlu.

                Di masa depan, kita dapat mengharapkan AI yang lebih terintegrasi dengan kehidupan kita, seperti sistem kesehatan yang dapat mendiagnosis penyakit dengan akurasi tinggi atau kota pintar yang mengoptimalkan penggunaan energi. Penting bagi kita untuk memahami dan mengatur teknologi ini agar dapat digunakan secara bijaksana.
            `
        },
        {
            id: 2,
            title: 'Seni Digital di Era Modern',
            category: 'Seni',
            date: '2025-04-28',
            image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&h=300',
            content: `
                Seni digital telah merevolusi dunia kreativitas, memberikan seniman alat baru untuk mengekspresikan ide mereka. Dengan perangkat lunak seperti Adobe Photoshop, Procreate, dan Blender, seniman dapat menciptakan karya yang sebelumnya tidak mungkin dilakukan dengan media tradisional. Teknologi seperti augmented reality (AR) dan virtual reality (VR) juga membuka peluang baru untuk pengalaman seni interaktif.

                Salah satu perkembangan menarik adalah munculnya NFT (Non-Fungible Tokens), yang memungkinkan seniman untuk menjual karya digital mereka dengan bukti kepemilikan di blockchain. Meskipun kontroversial, NFT telah mengubah cara kita memandang nilai seni digital.

                Namun, seni digital juga menghadapi tantangan, seperti isu plagiarisme dan keberlanjutan lingkungan akibat konsumsi energi blockchain. Seniman masa kini harus menyeimbangkan kreativitas dengan tanggung jawab sosial untuk memastikan seni tetap menjadi kekuatan positif di masyarakat.
            `
        },
        {
            id: 3,
            title: 'Strategi Latihan untuk Marathon',
            category: 'Olahraga',
            date: '2025-04-25',
            image: 'https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&h=300',
            content: `
                Berlari marathon adalah tantangan fisik dan mental yang membutuhkan persiapan matang. Untuk berhasil, pelari harus mengikuti rencana latihan yang terstruktur, yang mencakup lari jarak jauh, latihan interval, dan pemulihan aktif. Biasanya, rencana latihan selama 12-16 minggu diperlukan untuk membangun daya tahan.

                Nutrisi juga memainkan peran penting. Pelari harus mengonsumsi karbohidrat kompleks untuk energi, protein untuk pemulihan otot, dan tetap terhidrasi. Selama latihan, penting untuk mendengarkan tubuh dan menghindari overtraining, yang dapat menyebabkan cedera.

                Selain itu, persiapan mental sangat krusial. Visualisasi, meditasi, dan menetapkan tujuan kecil dapat membantu pelari tetap termotivasi. Pada hari perlombaan, strategi seperti pacing (mengatur kecepatan) dan manajemen energi akan menentukan keberhasilan menyelesaikan 42,2 kilometer dengan baik.
            `
        }
    ];

    // Function to render articles
    function renderArticles() {
        articlesContainer.innerHTML = '';
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article-card');
            articleElement.innerHTML = `
                <img src="${article.image}" alt="${article.title}" />
                <h3>${article.title}</h3>
                <div class="article-meta">Kategori: ${article.category} | Tanggal: ${article.date}</div>
                <div class="article-content">${article.content.trim().split('\n').map(paragraph => `<p>${paragraph.trim()}</p>`).join('')}</div>
            `;
            articlesContainer.appendChild(articleElement);
        });
    }

    // Render articles on page load
    renderArticles();
});
