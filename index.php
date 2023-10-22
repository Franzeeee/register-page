<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register</title>
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <section>
        <div class="container">
            <div class="header">
                <h1>Sign Up</h1>
            </div>
            <form id="registerForm" method="POST">
                <input type="text" autocomplete="off" name="fullname" placeholder="Complete Name" required>
                <input type="text" autocomplete="off" name="username" placeholder="Username" required>
                <input type="email" autocomplete="off" name="email" placeholder="Email" required>
                <input type="text" autocomplete="off" name="password" placeholder="Password" required>
                <button name="submit" class="signUpButton">Register</button>
            </form>
        </div>
    </section>


    <div id="thankYouModal" class="modal">
        <div class="modal-content">
            <span class="close" id="closeModal">&times;</span>
            <img src="img/check.png" alt="check image">
            <h2>Registered successfully!</h2>
            <p>Data successfully saved to database.</p>
        </div>
    </div>

    <script defer src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script defer src="js/script.js"></script>
</body>

</html>
