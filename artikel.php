<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// Sisanya dari kode artikel.php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$host = "localhost";
$user = "root";
$password = "";
$dbname = "website_db";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Koneksi database gagal: " . $conn->connect_error]);
    exit;
}

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
}

echo json_encode($artikel);
$conn->close();
?>
