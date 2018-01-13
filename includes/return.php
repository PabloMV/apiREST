<?php     
    
    include('conectDB.php');
    //$uToken = 'ugly'; //md5(rand(1000,9999)); //you can use any encryption

    
    
    if($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
        //Request identified as ajax request
        
        if(@isset($_SERVER['HTTP_HOST']) && $_SERVER['HTTP_HOST'] =="vianweb.com.br" || $_SERVER['HTTP_HOST'] =="www.vianweb.com.br"){//Validation token with domain
            $uToken = $_SERVER['HTTP_HOST'].'/token';            
         //HTTP_REFERER verification
            if($_POST['uToken'] == $uToken) {               
                //do your ajax task
                //don't forget to use sql injection prevention here.
                echo json_encode($pagesArray);
            }else {
                //return http_response_code(500);
                echo "erro";
                //header('Location: '.$_SERVER['HTTP_HOST']);
            
            }
        }else {
          //header('Location: http://yourdomain.com');
          //return http_response_code(500);
          echo "erro2 &&";
          echo json_encode($_SERVER['HTTP_HOST']);
        }
      }else {
        //header('Location: http://yourdomain.com');
        echo 'unauthoryzed!!!';
      }
    
    //header('Access-Control-Allow-Origin:*');
    
    
    //print $xml->asXML();
    //$_GET[$teste]
    //array_walk_recursive(,$xml);
    //echo $xml->asXML();
?>