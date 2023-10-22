<?php
    include 'db_connection.php';

try {

    $full_name = $_POST['fullname'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);


    $stmt = $pdo->prepare("INSERT INTO user_profile (full_name, username, email, password) VALUES (:full_name, :username, :email, :password)");
    $stmt->bindParam(':full_name', $full_name);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

} catch (PDOException $e) {
    echo "Registration failed: " . $e->getMessage();
}
?>
