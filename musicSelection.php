<?php
include_once("./inc/pdo.php");
if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $age = $_POST['age'];
    $sexe = $_POST['sexe'];
    $telephone = $_POST['telephone'];
    $adresse = $_POST['adresse'];
    $profil = $_POST['profil'];
    $tags = $_POST['tags'];
    // sécurité
    // 1ere étape , vérif compte mail 
    $rq2 = "SELECT * FROM `user` WHERE email = '$email'";
    $read = $pdo->prepare($rq2);
    $read->execute();
    $result = $read->fetch();
     // 2eme étape hasher mon password
     $password = password_hash($password, PASSWORD_ARGON2I);
    var_dump($result);
    // die();
    if ($result === false) {
        $rq = "INSERT INTO `user`( `email`, `password`, `nom`, `prenom`, `age`, `sexe`, `telephone`, `adresse`, `profil`, `tags`) VALUES
     ('$email','$password','$nom','$prenom','$age','$sexe','$telephone','$adresse','$profil','$tags')";
        $create = $pdo->prepare($rq);
        $create->execute();
    } else {
        // redirection vers le login si l'email est déjà utilisé
        header("Location: login.php");
    }
   
}





?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music selection</title>
    <script src="./assets/js/selection.js" defer></script>
    <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>
    <h1>Selectionnez vos titre de match :</h1>
    <div>
        <input type="text" id="search">
    </div>
    <div id="result"></div>
    <div id="titres" style="border:1px red solid;"></div>
    <form action="registerend.php" method="post" name="registerEnd">
        <input type="hidden" name="email" value="<?= $email ?>">
        <input type="hidden" name="titre1">
        <input type="hidden" name="titre2">
        <input type="hidden" name="titre3">
        <input type="hidden" name="titre4">
        <input type="hidden" name="titre5">
        <input type="submit" value="Enregistrez vos titres favoris" name="fin" class="placeholder">
    </form>
</body>

</html>