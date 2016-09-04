<?php

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr">
<head>
    <title>Présentation</title>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="../Css/bootstrap.min.css" rel="stylesheet">
    <link href="../Css/style.css" rel="stylesheet">
    <link href="../Css/animate.css" rel="stylesheet">
    <script type="text/javascript" src="../Js/jquery-2.2.0.js"></script>
    <script type="text/javascript" src="../Js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../Js/Js.js"></script>

</head>
<body>
    <div class="container">

        <div class="panel panel-primary">
            <div class="panel-heading">
                <h1>Présentation</h1>
            </div>
            <div class="panel-body">
                <p class="lead">Enzo Muhlinghaus</p>
            </div>
        </div>

        <div style="text-align: center">
            <button id="charger" class="btn btn-primary ">Charger les données JSON</button>
        </div>

        <br>
        <button type="button" id="btn" class="btn btn-default" id="myBtn">Retourner au premier slide</button>

        <div id="myCarousel" class="carousel slide" data-ride="carousel">

            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img id="img0" class="image" src="../img/batiactu.png" alt="" style="height: 300px">
                    <div class="carousel-caption">
                        <h4 id="h4_0"></h4>
                        <p id="p0"></p>
                    </div>
                </div>
            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

</body>
</html>
