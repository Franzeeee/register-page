<?php
	$host = 'localhost';
	$database = 'integrative_programming';
	$username = 'root';
	$password = '';

	try {

	    $pdo = new PDO("mysql:host=$host;dbname=$database", $username, $password);

	    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	    echo "Connected to the database successfully!";
	} catch (PDOException $e) {
	    die("Connection failed: " . $e->getMessage());
	}
?>
