<?php  
 //esse bloco de código em php verifica se existe a sessão, pois o usuário pode simplesmente não fazer o login e digitar na barra de endereço do seu navegador o caminho para a página principal do site (sistema), burlando assim a obrigação de fazer um login, com isso se ele não estiver feito o login não será criado a session, então ao verificar que a session não existe a página redireciona o mesmo para a index.php.
session_start();
if((!isset ($_SESSION['login']) == true) and (!isset ($_SESSION['senha']) == true))
{
	unset($_SESSION['login']);
	unset($_SESSION['senha']);
	header('loaction:'.$_SERVER['HTTP_REFERER'].'admin');
	}else{
        //echo "nooooooo";
    }

$logado = $_SESSION['login'];
?>
<header id="cmsPanel">
        <div id="admControll"><span class="lastLog">Ultimo login:"03/04/2017 - 02:28</span><span id="userLoged">Pablo<i id="on"></i><i id="off"></i></span></div>
        
    </header>

    <fieldset>Páginas:
    </fieldset>
    <nav id="menu" class="mainMenu ">    
        <ul id="menuList" class="menuList edit">               
        </ul>    
    </nav>
   
        
    <section class="" id=""></section>
   
    <div id="linha">
        <form action="updaterPAGES.php" method="POST">
            <fieldset>
                <textarea name="pageCode" id="pageCode" cols="30" rows="10">
                </textarea>
                <input type="hidden" name="page_id" value="" />
                <input type="hidden" name="reqType" value="updatePage" />
            </fieldset>
            <button type="submit">UPDATE</button>
        </form>
    </div>