<?php
$host = '127.0.0.1';
$user = 'root';
$pass = '';
$db = 'faculdade';
$dns = "mysql:host={$host};dbname={$db}";

try {
    $conn = new PDO($dns, $user, $pass);
} catch(PDOException $e) {
    echo $e->getMessage();
}

$sql = "CREATE TABLE IF NOT EXISTS `system` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`last_att_date` DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00',
	PRIMARY KEY (id)
)";

$conn->query($sql);

$sql = "CREATE TABLE IF NOT EXISTS `players` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(16) NOT NULL,
	`puuid` VARCHAR(150) NOT NULL,
	`profileIconId` VARCHAR(150) NOT NULL,
	`encryptedId` VARCHAR(150) NOT NULL,
	`tier` VARCHAR(20) NOT NULL,
	`division` VARCHAR(5) NOT NULL,
	`lp` INT NOT NULL,
	`toxic_points` INT NOT NULL DEFAULT '0',
	`stream_link` VARCHAR(50) NOT NULL,
	`knownas` VARCHAR(25) NOT NULL,
	`date` DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00',
	PRIMARY KEY (id)
)";

$conn->query($sql);

$pdo = new \PDO($dns, $user, $pass);