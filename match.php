<?php
include_once("./inc/pdo.php");
$email = $_GET['email'];
$rq2 = "SELECT * FROM `user` WHERE email = '$email'";
$read = $pdo->prepare($rq2);
$read->execute();
$result = $read->fetch();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>VOUS AVEZ UN MATCH</h1>
    <div><?= $result['titre1'] ?></div>
    <div><?= $result['titre2'] ?></div>
    <div><?= $result['titre3'] ?></div>
    <div><?= $result['titre4'] ?></div>
    <div><?= $result['titre5'] ?></div>
</body>
</html>