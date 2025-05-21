<?php
// Aktifkan error reporting untuk debugging (nonaktifkan di produksi)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Pastikan tidak ada output sebelum header
header('Content-Type: text/html; charset=utf-8');

// Konfigurasi database
$host = "localhost";
$user = "root";
$password = "";
$dbname = "website_db";

// Membuat koneksi
$conn = new mysqli($host, $user, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    http_response_code(500);
    die("Koneksi database gagal: " . $conn->connect_error);
}

// Ambil ID dari parameter URL
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

$sql = "SELECT judul, isi, tanggal, gambar FROM artikel WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    ?>
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title><?php echo htmlspecialchars($row['judul']); ?></title>
        <!-- Tambahkan CSS jika ada -->
        <link rel="stylesheet" href="styles.css"> <!-- Sesuaikan dengan file CSS Anda -->
    </head>
    <body>
        <div class="article-detail">
            <h1><?php echo htmlspecialchars($row['judul']); ?></h1>
            <div class="article-meta">Tanggal: <?php echo htmlspecialchars($row['tanggal']); ?></div>
            <?php if ($row['gambar']) : ?>
                <img src="<?php echo htmlspecialchars($row['gambar']); ?>" alt="<?php echo htmlspecialchars($row['judul']); ?>" class="article-image">
            <?php endif; ?>
            <div class="article-content"><?php echo nl2br(htmlspecialchars($row['isi'])); ?></div>
        </div>
    </body>
    </html>
    <?php
} else {
    http_response_code(404);
    echo "<h1>404 - Artikel Tidak Ditemukan</h1><p>Artikel dengan ID $id tidak ditemukan.</p>";
}

$conn->close();
?>
