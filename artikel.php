<?php
// Konfigurasi database
$host = "localhost";
$user = "root";          // ganti jika user bukan root
$password = "";          // ganti sesuai password MySQL kamu
$dbname = "nama_database_kamu"; // ganti dengan nama database kamu

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

$sql = "SELECT id, judul, isi, tanggal FROM artikel ORDER BY tanggal DESC";
$result = $conn->query($sql);

$artikel = [];

while($row = $result->fetch_assoc()) {
    $artikel[] = $row;
}

header('Content-Type: application/json');
echo json_encode($artikel);
?>
