<?php


include('../includes/conectDB.php');
$pageID= $_POST['page_id'];
$HTMLpage= $_POST['pageCode'];





class CRUD {
    private $createPageSQL = "INSERT INTO pages (`nome`, `titulo`, `html`, `SEO`) VALUES ('', '', '', '')";

    public function createPage($conn){
        //echo 'fuck its works';
        if (mysqli_query($conn, $createPageSQL)) {
            echo "Record created successfully";
        } else {
            echo "Error creating record: " . mysqli_error($conn);
        }
    }
    public function updatePage($conn, $pageID, $HTMLpage){
        /*if (mysqli_query($conn, $updatePageSQL)) {
            echo "Record updated successfully"."<a href='../index.html'>BACK</a>";
        }*/
        /* echo 'fuck its works'; */
        
        if($conn->query("UPDATE pages SET html='$HTMLpage' WHERE page_id='$pageID'")) {
            echo "Record updated successfully"."<a href='../admin'>BACK</a>";
        }else{
            echo "Error updating record: " . mysqli_error($conn)."<a href='../admin'>BACK</a>";
        }
    }  
}


if($reqType=$_POST['reqType']){
    $CRUD=new CRUD();
    switch($reqType){
        
        case 'ceatePage':        
            $CRUD->createPage($conn);        
        break;
        case 'updatePage':
            $CRUD->updatePage($conn, $pageID, $HTMLpage);
        break;
    }
}






/* SEO=''*/
 /*nome='', titulo='',*/


?>