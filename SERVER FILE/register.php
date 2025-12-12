<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hmp";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die(json_encode(["result" => "error", "message" => "Database connection failed"]));
}

extract($_POST);

$check = $conn->prepare("SELECT email FROM users WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
$checkResult = $check->get_result();

if ($checkResult->num_rows > 0) {
    echo json_encode([
        "result" => "error",
        "message" => "Email sudah terdaftar"
    ]);
    $check->close();
    $conn->close();
    exit;
}
$check->close();


$stmt = $conn->prepare(
    "INSERT INTO users (email, password, nama, isAdmin) VALUES (?, ?, ?, 0)"
);
$stmt->bind_param("sss", $email, $pw, $name);

if ($stmt->execute()) {
    $arr = ["result" => "success"];
} else {
    $arr = [
        "result" => "error",
        "message" => "Gagal register"
    ];
}

echo json_encode($arr);

$stmt->close();
$conn->close();
?>
