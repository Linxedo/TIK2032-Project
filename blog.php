<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Website - Blog</title>
    <link rel="stylesheet" href="blog.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Open+Sans&family=Lora&display=swap" rel="stylesheet" />
</head>
<body>
    <div class="background-container" id="background-container">
        <div class="background-layer" id="bg-layer-1"></div>
        <div class="background-layer" id="bg-layer-2"></div>
    </div>
    <header class="header">
        <div class="logo">
            <h1>Steve</h1>
        </div>
        <nav class="nav">
            <a href="index.html" class="nav-link">Home</a>
            <a href="gallery.html" class="nav-link">Gallery</a>
            <a href="#" class="nav-link active">Blog</a>
            <a href="contact.html" class="nav-link">Contact</a>
        </nav>
        <div class="customization-controls">
            <select id="font-selector" aria-label="Select font">
                <option value="Roboto">Roboto</option>
                <option value="Open Sans">Open Sans</option>
                <option value="Lora">Lora</option>
            </select>
            <button class="theme-toggle" aria-label="Toggle dark mode">
                <i class="fas fa-moon"></i>
            </button>
        </div>
    </header>

    <main class="main">
        <section class="content">
            <h2 class="blog-title">Artikel Terbaru</h2>
            <div class="articles-container" id="articles-container">
                <?php include 'artikel.php'; ?>
            </div>
        </section>
    </main>

    <footer class="footer">
        <p>© Steve 2025</p>
        <div class="social-links">
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        </div>
    </footer>

    <script src="blog.js"></script>
</body>
</html>
