<?php
$host = 'localhost';
$dbname = 'Blog_db'; 
$username = 'root'; 
$password = ''; 

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}


$stmt = $pdo->query("SELECT id, title, date, author, image, excerpt FROM articles ORDER BY date DESC");
$articles = $stmt->fetchAll(PDO::FETCH_ASSOC);


foreach ($articles as $article) {
    echo '<div class="article-card">';
    echo '<img src="' . htmlspecialchars($article['image']) . '" alt="' . htmlspecialchars($article['title']) . '" class="article-image">';
    echo '<div class="article-content">';
    echo '<h3>' . htmlspecialchars($article['title']) . '</h3>';
    echo '<div class="article-meta">Oleh ' . htmlspecialchars($article['author']) . ' | ' . htmlspecialchars($article['date']) . '</div>';
    echo '<p>' . htmlspecialchars($article['excerpt']) . '</p>';
    echo '<a href="article.php?id=' . $article['id'] . '" class="read-more">Baca Selengkapnya</a>';
    echo '</div>';
    echo '</div>';
}
?>
