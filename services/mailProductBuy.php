<?php
//Variáveis
$verify= $_POST['verify'];
$nome = $_POST['nome'];
$email = $_POST['email'];
$image = $_POST['img'];
$descricao=$_POST['descricao'];
$preco=$_POST['preco'];
$nomeProduto=$_POST['nomeProduto'];
$mensagem = $_POST['msg'];
date_default_timezone_set("Brazil/East"); 
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');



$arquivo = "<style type='text/css'>
  
  </style>
    <html>
       <body>
            <center>
                <div>Você recebeu um novo pedido de $nome, sobre este produto de seu site:$nomeProduto<br/>
                <img src='$image' /><br/>
                O valor é de $preco.<br/>
                Seu cliente deixou esta menságem também:</br>
                $mensagem</br>
                Responda este email para dar procedencia a sua venda.<br/>
                Boas Vendas.
                </div>
            </center>
        </body>
    </html>
  ";
$arquivo2 = "<style type='text/css'>
  
  </style>
    <html>
       <body>
            <center>
                <div>
                Olá Eva. </br>
                Você recebeu uma mensagem de $nome, </br>
                Veja:</br>
                $mensagem</br>
                Bom dia.
                </div>
            </center>
        </body>
    </html>
  ";

//print_r($image);
/*$arquivo = "<style type='text/css'>
  body {
    margin:0px;
    font-family:Verdane;
    font-size:12px;
    color: #666666;
  }
  a{
    color: #666666;
    text-decoration: none;
  }
  a:hover {
    color: #FF0000;
    text-decoration: none;
  }
  </style>
    <html>
        <table width='510' border='1' cellpadding='1' cellspacing='1' bgcolor='#CCCCCC'>          
          <tr>
            <td>Nome:$nomeProduto</td>
          <tr>
          <tr>
            <td><img src='$image' /></td>
          <tr>
          <tr>
            <td>Preço:$preco</td>
          <tr>
            <td width='500'>Cliente:$nome</td>
          </tr>
          <tr>
            <td width='320'>E-mail:<b>$email</b></td>
          </tr> 
          <tr>               
            <td width='320'>Mensagem:$mensagem</td>        
          </tr>  
          <tr>
            <td>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></td>
          </tr>
        </table>
    </html>
  ";
*/


//enviar
  
  // emails para quem será enviado o formulário
  $meta=null;
  $emailenviar = "pabloviana.unisinos@gmail.com";
  $destino = $emailenviar;
  if($verify==='pedido'){
    $assunto = "Novo Pedido";
    $meta=" <meta http-equiv='refresh' content='3;URL=http://vianweb.000webhostapp.com/EvinhaMantas/#pages=produtos'>";
  }else{
    $assunto = "Nova Mensagem";
    $meta=" <meta http-equiv='refresh' content='3;URL=http://vianweb.000webhostapp.com/EvinhaMantas/#pages=contato'>";
    $arquivo = $arquivo2;
  }

  // É necessário indicar que o formato do e-mail é html
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  $headers .= 'From:'.$email;
  //$headers .= "Bcc: $EmailPadrao\r\n";
  
  $enviaremail = mail($destino, $assunto, $arquivo, $headers);
  if($enviaremail){
  echo "E-MAIL ENVIADO COM SUCESSO! <br> O link será enviado para o e-mail fornecido no formulário";
  echo $meta;
  } else {
  echo "ERRO AO ENVIAR E-MAIL!";
  echo "";
  }
?>