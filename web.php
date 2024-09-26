<?php
$servername = 'localhost';
$username = 'root';
$password = "";
$database_name = 'car database';

$conn = mysqli_connect($servername, $username, $password, $database_name);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if(isset($_POST['save']))
{
$username = $_POST['username'];
$name = $_POST['name'];
$password = $_POST['password'];

$sql_query = "INSERT INTO signupinfo (username,name,password) VALUES ('$username', '$name', '$password')";


if(mysqli_query($conn, $sql_query))
{
echo "New Details Entry inserted Successfully !";
}
else{
    echo "Error: ". $sql. "". mysqli_error($conn);
}

mysqli_close($conn);
}
?>