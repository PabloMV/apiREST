<!DOCTYPE html>
<html id="" class="">
<head id="" class="">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

    <!-- <link rel="stylesheet" href="css/main.css"/> -->
    <link rel="stylesheet/less" type="text/css" href="css/main.less" />
    <link rel="stylesheet" type="text/css" href="css/normalize.css" />
    <!-- <link rel="stylesheet" href="myProdCar/car.css"/> -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Orbitron:500,900" rel="stylesheet">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="icon" type="image/png" href="favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="#0f0f0f" />
    <link rel="alternate" hreflang="pt" href="http://www.vianweb.com.br/" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title id="page-title" class="">Vianweb - <?php echo $pageTitle; ?></title>
    <meta name="keywords" content=<?php echo $pageKeywords; ?> />
    <meta name="description" content=<?php echo $pageDescription; ?> />
    <meta name="robots" content="" />
    <style>
    #loader{
        position: absolute;
        background: #fff;
        width:100%;
        height: 100%;
        top: 0;
    }
    #spin{
            width: 30%;
            padding: 1rem;
            height: auto;
            margin: 25% auto;
            background: #000;
            border-radius: 50px;
            transform: rotate(-360deg);
            transition: all 1s ease;
            color:#fff;
            font-family:'Arial';
        }
    </style>

    
</head>
<body id="" class="">
    <header id="" class="edit">
        <div class="headerBg"></div>
        <div id="logoBg">
            <a href="#pages=home"><img src="img/logo.png" alt=""></a>
        </div>   
    </header>
    <nav id="menu" class="mainMenu ">
        <a href="#" class="mob mobMenuBtnOpen material-icons">dehaze</a>
        <ul id="menuList" class="menuList edit">

        <a href="?page=home">Home</a>
                
        </ul>
        <a href="#" class="mob mobMenuBtnClose material-icons">close</a>
    </nav>
    <nav id="menu" class="mainMenu floatMenu">
        <a href="#" class="mob mobMenuBtnOpen material-icons">dehaze</a>
        <ul id="menuList" class="menuList edit">
            <a href="?page=home">Home</a>
                
                
        </ul>
        <a href="#" class="mob mobMenuBtnClose material-icons">close</a>
    </nav>
    <section id="" class="edit">
    <?php
            echo $page;
    ?>
    </section>
    <footer id="" class="edit">
        <span id="rights">Desenvolvido por Pablo Viana. All rights reserved VIANWEB&copy;.</span>    
    </footer>   
    <div id="loader"><div id="spin"><h1>Carregando...</h1></div></div>   
</body>
    <script src="../less.js-master/dist/less.js"></script>
    <script src="js/main.js"></script>
    <script src="js/pages.js"></script>
    <script src="myProdCar/car.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
</html>