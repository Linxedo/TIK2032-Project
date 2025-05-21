<?php
// Tampilkan error untuk debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Cek jika ID artikel tersedia
if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    die("ID artikel tidak valid.");
}

$id = intval($_GET['id']);

// Koneksi ke database
$host = "localhost";
$user = "root";
$password = "";
$dbname = "website_db";

$conn = new mysqli($host, $user, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data artikel berdasarkan ID
$sql = "SELECT * FROM artikel WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();

// Cek apakah artikel ditemukan
if ($result->num_rows === 0) {
    die("Artikel tidak ditemukan.");
}

$artikel = $result->fetch_assoc();

$conn->close();
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title><?= htmlspecialchars($artikel['judul']) ?></title>
    <link rel="stylesheet" href="blog.css"> <!-- Ganti sesuai dengan CSS kamu -->
</head>
<body>
    <div class="article-detail-container">
        <h1><?= htmlspecialchars($artikel['judul']) ?></h1>
        <p><strong>Tanggal:</strong> <?= htmlspecialchars($artikel['tanggal']) ?></p>
        <?php if (!empty($artikel['gambar'])): ?>
            <img src="<?= htmlspecialchars($artikel['gambar']) ?>" alt="<?= htmlspecialchars($artikel['judul']) ?>" style="max-width: 100%; height: auto;">
        <?php endif; ?>
        <div class="article-content">
            <p><?= nl2br(htmlspecialchars($artikel['isi'])) ?></p>
        </div>
        <a href="blog.html">← Kembali ke Blog</a>
    </div>
</body>
</html>
