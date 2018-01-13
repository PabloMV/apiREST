<?php
header('content-type: application/json; charset=utf-8');
$servername = "mysql.hostinger.com.br";
$username = "u118641058_vw";
$password = "p@bl0mv14n@@";
$dbname = "u118641058_vwdb";

$conn = new mysqli($servername, $username, $password, $dbname) or die();
$sql = "SELECT * FROM pages";
$resultPages = $conn->query($sql);

//$pages = mysqli_fetch_assoc($resultPages);
//$connect = mysqli_connect('mysql.hostinger.com.br', 'u792670141_super', 'p@bl0mv14n@');
if ($resultPages->num_rows > 0) {
    // output data of each row
    $indexMenu=0;
    while($row = $resultPages->fetch_assoc()) {
      $pages[$indexMenu] = (object)["page_id"=>$row["page_id"],"nome"=>$row["nome"],"titulo"=>$row["titulo"],"html"=>$row["html"]];
      $pagesArray[$indexMenu] = array("page_id"=>utf8_encode($row["page_id"]),"nome"=>$row["nome"],"titulo"=>utf8_encode($row["titulo"]),"html"=>$row["html"],"SEO"=>$row["SEO"]);   
      $indexMenu++;

      
    }
    //$pagesArray = utf8_encode($pagesArray);
    //echo json_encode($pagesArray);
    //$teste=json_encode($pagesArray);
    /*echo "<script id='bye'>                        
            var phpContent=$teste;
            console.log($teste); 
            console.log(phpContent); 
            $('script#bye').remove();
          </script>";*/
} else {
    echo "0 results";
}
//print_r(json_encode($pagesArray)); 

//$selectDb = mysqli_select_db($connect, 'u792670141_cms');

?>