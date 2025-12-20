<?php
 header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hmp";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

extract($_POST);
$stmt = $conn->prepare(
"SELECT email, nama FROM users WHERE email = ? AND password = ?");
$stmt->bind_param("ss", $email, $pw);

if ($stmt->execute()) {
   	$result = $stmt->get_result();
	$row = $result->fetch_assoc();
   $arr=["result"=>"success", "email"=>$row['email'], "name"=>$row['nama']];
} else {
   $arr= ["result"=>"error","message"=>"Gagal login"];
}
echo json_encode($arr);
$stmt->close();
$conn->close();
?>

