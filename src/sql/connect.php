<?php
$db = 'd6bgivbrcnttfs';
$host = 'ec2-54-221-212-126.compute-1.amazonaws.com';
$user = 'bnktbffxvtgkej';
$pass = 'a23ede4291a8636414701160ea1657d5763ea49470f2184c0f4327f67123f962';
$port = 5432;
$dns = "pgsql:host=${host};dbname=${db};port=${port};user=${user};password=${pass}";

try {
	$conn = new PDO($dns);
	
	$query = "CREATE TABLE IF NOT EXISTS users (
		id  SERIAL PRIMARY KEY,
		username VARCHAR(12) NOT NULL,
		email VARCHAR(30) NOT NULL,
		password VARCHAR(12) NOT NULL
	)";
	$conn->query($query);
} catch(PDOException $e) {
	echo $e->getMessage();
}

$pdo = new \PDO($dns);