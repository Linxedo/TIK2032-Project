<?php
$host = 'localhost';
$user = 'root'; // Default user XAMPP
$pass = ''; // Default password XAMPP (kosong)
$db = 'nama_database'; // Ganti dengan nama database kamu

$conn = mysqli_connect($host, $user, $pass, $db);
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>
