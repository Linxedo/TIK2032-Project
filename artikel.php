<?php
// Konfigurasi database
$host = "localhost";
$user = "root";           // Ubah jika bukan root
$password = "";           // Ubah sesuai password MySQL kamu
$dbname = "nama_database_kamu"; // Ganti dengan nama database kamu

// Membuat koneksi
$conn = new mysqli($host, $user, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["error" => "Koneksi gagal: " . $conn->connect_error]));
}

// Query ambil data artikel
$sql = "SELECT id, judul, isi, tanggal, gambar FROM artikel ORDER BY tanggal DESC";
$result = $conn->query($sql);

$artikel = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $artikel[] = $row;
    }
}

// Mengatur header JSON
header('Content-Type: application/json');
echo json_encode($artikel);

// Tutup koneksi
$conn->close();
?>
