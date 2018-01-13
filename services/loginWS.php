<?php	
date_default_timezone_set("Brazil/East");
include("../includes/conectDB.php");
//var_dump($conn);
$requestType=$_POST['reqType'];
$user_name=$_POST['name'];
$usrPassword=$_POST['pass'];
$user_email=$_POST['email']; 
$last_name="default empty";   
$date=date('Y-m-d H:i:s');


    class admin {
        /* public $servername = "mysql.hostinger.com.br";
        public $username = "u118641058_vw";
        public $password = "p@bl0mv14n@@";
        public $dbname = "u118641058_vwdb";  */
        
        #$sql = "SELECT * FROM pages";
        #$resultPages = $conn->query($sql);
        function login($conn, $user_email, $usrPassword){
            //echo "success";
            //echo 'classe funcionando'.$user_email."   ".$usrPassword;
            /* $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname); */
            $verify_login="SELECT * FROM users WHERE email='$user_email' AND pass='$usrPassword'";
            $startVerify=$conn->query($verify_login);
            #var_dump($startVerify);
            if($startVerify->num_rows > 0){ 
                session_start();
                $_SESSION['login'] = $user_email;
                $_SESSION['senha'] = $usrPassword;
                //header('location:site.php');
                //echo 'secure.php';
                #return http_status_text(300);
                $response['url']='secure.php';
                $response['status'] = 'success';
                echo json_encode($response);
            }else{
                //echo $startVerify;
                session_destroy();
                echo"login fail. Try again!".mysqli_error($conn);
            }
        }

        function register(){
            $conn = new mysqli($servername, $username, $password, $dbname);
            $insert_user="INSERT INTO users (`first_name`,`last_name` ,`email`, `pass`,`description`, `pic_url`,`last_login`) VALUES ('$user_name','$last_name','$user_email','$usrPassword','$last_name','$last_name','$date')";
            if(mysqli_query($conn,$insert_user)){
                  echo"Register OK!";
            }else{
                  echo"Register fail. Try again!". mysqli_error($conn); ;
            }
        }
    }
    switch($requestType){        
        case "login":
            $admin= new admin();
            $admin->login($conn, $user_email, $usrPassword);
        break;
        case "register":
            $admin= new admin($conn);
            $admin->register();
        break;
    }

/*class manageUsersCRUD
{
    private function access_control(){
        $insert_user="INSERT INTO users (`first_name`, `email`, `pass`, `last_login`) VALUES ('$user_name', '$user_email', '$usrPassword', date('Y-m-d H:i:s'))";
        switch($requestType){
            case "login":

            break;
            case "register":
                if($conn->query($insert_user)){
                    echo"Register OK!";
                }else{
                    echo"Register fail. Try again!";
                }
            break;
        }
    }
    public function verify_access(){
         switch($requestType){
            case "login":

            break;
            case "register":
                //*****NÃO DESENVOLVIDO**** Aqui efetuar uma validação mais apurada dos dados enviados antes de salvar no BD
                $this->access_control($requestType);
            break;
        }
    }
}*/




?>