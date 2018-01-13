<!DOCTYPE html>
<html id="" class=""  ng-app="vianweb">

<head id="" class="">
    <!-- <link rel="stylesheet" href="css/main.css"/> -->
    <link rel="stylesheet/less" type="text/css" href="/public/css/main.less" />
    <link rel="stylesheet/less" type="text/css" href="/public/css/normalize.css" />
    <!-- <link rel="stylesheet" href="myProdCar/car.css"/> -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Orbitron:500,900" rel="stylesheet">
    <link rel="icon" type="image/png" href="favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="#373535" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title id="page-title" class=""></title>
    <meta name="keywords" content="" />
    <meta name="description" content="" />
    <meta name="robots" content="" />


</head>

<body id="" class="" ng-controller="mainController">
    <header id="" class="edit">
    <div class="headerBg"></div>
        <div id="logoBg">
            <a href="#pages=home"><img src="public/img/logo.png" alt=""></a>
        </div>

    </header>
    <nav id="menu" class="mainMenu ">
        <a href="#" class="mob mobMenuBtnOpen material-icons">dehaze</a>
        <ul id="menuList" class="menuList edit">



        </ul>
        <a href="#" class="mob mobMenuBtnClose material-icons">close</a>
    </nav>
    <section id="" class="edit" ng-view></section>

    <footer id="" class="edit">
        <span id="rights">Desenvolvido por Pablo Viana. All rights reserved VIANWEB&copy;.</span>
    </footer>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
<script src="public/js/less.min.js"></script>	       
<script src="<?= asset('public/app/app.js') ?>"></script>
<script src="<?= asset('public/app/controllers/contatos.js') ?>"></script>
<script src="<?= asset('public/app/controllers/routes.js') ?>"></script>

<!-- <script src="js/main.js"></script>
<script src="js/pages.js"></script>
<script src="myProdCar/car.js"></script> -->

</html>