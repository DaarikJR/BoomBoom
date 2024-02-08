<?php
// pour les tests
var_dump($_POST);
include_once("./inc/pdo.php");
$email = $_POST["email"];
$titre1 = $_POST["titre1"];
$titre2 = $_POST["titre2"];
$titre3 = $_POST["titre3"];
$titre4 = $_POST["titre4"];
$titre5 = $_POST["titre5"];
$rq = "UPDATE `user` SET `titre1`='$titre1',`titre2`='$titre2',`titre3`='$titre3',`titre4`='$titre4',`titre5`='$titre5' WHERE email = '$email'";
$update = $pdo->prepare($rq);
$update->execute(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <input type="hidden" name="email">
</body>

</html>