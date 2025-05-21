<?php
// Mengatur header JSON dan CORS
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *'); // Untuk frontend di domain berbeda (opsional)

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
    echo json_encode(["error" => "Koneksi database gagal: " . $conn->connect_error]);
    exit;
}

// Query untuk mengambil data artikel
$sql = "SELECT id, judul, isi, tanggal, gambar FROM artikel ORDER BY tanggal DESC";
$result = $conn->query($sql);

$artikel = [];

if ($result === false) {
    http_response_code(500);
    echo json_encode(["error" => "Query gagal: " . $conn->error]);
    $conn->close();
    exit;
}

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $artikel[] = $row;
    }
} else {
    // Tidak ada data, tapi bukan error
    echo json_encode([]);
}

$conn->close();
?>
