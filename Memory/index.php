<!DOCTYPE html>


<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="style\style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@700&display=swap" rel="stylesheet">
    
    <title>Memory game</title>
</head>
<body>

<h1>Memory game</h1>

<?php if(empty($_POST)) : ?>

<div id="formulaire">
<form action="index.php" method="post">
<label for="pseudo">Entrez votre pseudo</label>
<input type="text" name="pseudo">
</form>
</div>

<?php else : ?>
    <h2>Bonjour <?php printf('%s', $_POST["pseudo"]); ?></h2>
    
    <div id="coups">
        <h3>Nombre de coups</h3>
        <p id="nbCoup">0</p>
        <input id="score" name="score" type="hidden" value="">
    </div>

    <div class='container text-center'>
        <div id='resultat'>
        </div>
    </div>
    <div id="final"></div>

<?php endif;
/*if ($_POST["score"] == '8') : ?>
    <h1>bravo</h1>
<?php endif; */?>



<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
<script src="script\script2.js">
</script>
</body>

</html>