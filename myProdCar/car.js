var liWdt=null;
var carCount=1;
var startCar = function(verify){
    
    console.log(verify); 
        if(verify==="produtos"){
            $("#buyModal").remove();
            $("body").append("<div id='buyModal' style='display:none;'>  <form method='post' name='form_produto' action='services/mailProductBuy.php' type='text/plain'><h1>Solicite este produto</h1> <div class='close'>X</div><div id='confirm'> Produto:<input type='text' name='nomeProduto' readonly maxlength='40'/> <input type='image' src='' value='' alt=''/> <input type='hidden' name='img' src='' value='' alt=''/> Descrição:<textarea rows=5 name='descricao' readonly maxlength='40'></textarea> <input type='text' name='preco' readonly maxlength='40'/> </div><div id='dataClient'> Seu nome:<input type='text' name='nome' maxlength='40'/> Seu email:<input type='email' name='email' maxlength='30'/> Mensagem:<textarea name='msg' cols='16' rows='5'></textarea><input type='hidden' name='verify' value='pedido' /> <input type='submit' value='Enviar'> </div></form> </div>");

            for(var i=0;i < content.itens.length;i++){
                $('#pictures ul').append("<li><img src='"+content.itens[i].img_url+"' /></li>");
            }
            $('#description h2').text(content.itens[0].nome);
            $('#description p').text(content.itens[0].descricao);
            $('#description #estoque').text(content.itens[0].estoque);
            $('#description .btn').text(content.itens[0].preco);

            
            $('#pictures li').width($('#pictures').width());
            $('#pictures img').width($('#pictures').width());
            $('#pictures').height($("#pictures img").height());
            $('#pictures ul').width(($('#pictures li').width()*$('#pictures li').length))
            window.addEventListener("resize", function(){
                $('#pictures li').width($('#pictures').width());
                $('#pictures img').width($('#pictures').width());
                $('#pictures').height($("#pictures img").height());
                $('#pictures ul').width(($('#pictures li').width()*$('#pictures li').length))
            })
            var carImg=$('#pictures img');
            carImg.on("load", function(){
                $('#pictures li').width($('#pictures').width());
                $('#pictures img').width($('#pictures').width());
                $('#pictures').height($("#pictures img").height());
                $('#pictures ul').width(($('#pictures li').width()*$('#pictures li').length))
            })

        }else{
            $("#buyModal").remove();
        }


    var deg=0;
    $('#pictures i').on('click', function(){
        var Wdt=$('#pictures ul li').width();        
        console.log($(this).attr('class'));
        switch($(this).attr('class')){            
            case 'iconBack':
                if(carCount>1){
                    carCount--;
                    $('#description').css({'transform':'rotate3d(0,1,0,'+(deg-=360)+'deg)'});
                    $('#pictures ul').animate({'margin-left':(liWdt+=Wdt)+'px'});
                    $('#description h2').text(content.itens[(carCount-1)].nome);
                    $('#description p').text(content.itens[(carCount-1)].descricao);
                    $('#description #estoque').text(content.itens[(carCount-1)].estoque);
                    $('#description .btn').text(content.itens[(carCount-1)].preco);
                }
            break;
            case 'iconNext':                
                if(carCount<$('#pictures li').length){
                    carCount++;
                    $('#description').css({'transform':'rotate3d(0,1,0,'+(deg+=360)+'deg)'});
                    $('#pictures ul').animate({'margin-left':(liWdt-=Wdt)+'px'});
                    $('#description h2').text(content.itens[(carCount-1)].nome);
                    $('#description p').text(content.itens[(carCount-1)].descricao);
                    $('#description #estoque').text(content.itens[(carCount-1)].estoque);
                    $('#description .btn').text(content.itens[(carCount-1)].preco);
                }
            break;
        }

    });
    $('#description .btn').click(function(){
        $('#buyModal').fadeIn(500);
        //$('#buyModal').css(500);
        //$('#buyModal').height($('body').height());
       // $("body *:not(#buyModal *)").css('opacity','0.6');
        //$("#buyModal").css('opacity','1');
        $("input[name='nomeProduto']").val($("#description h2").text());
        $("input[name='preco']").val($("#description .btn").text());
        $("textarea[name='descricao']").val($("#description p").text());
        $("input[name='nomeProduto']").val($("#description h2").text());        
        $('#buyModal input[type="image"]').attr('src',content.itens[(carCount-1)].img_url );
        $('#buyModal input[name="img"]').attr('value','http://vianweb.000webhostapp.com/EvinhaMantas/'+content.itens[(carCount-1)].img_url );
    })
    $('#buyModal .close').click(function(){
        $('#buyModal').fadeOut(500);
    })
}



/*var liWdt=null;
var startCar = function(verify){
    console.log(verify); 
        if(verify==="produtos"){
            $('#pictures').height($('#pictures img').height());
            $('#pictures ul li').width($('#pictures').width()-37);
            $('#pictures div').width($('#pictures').width());
            $('#pictures ul li').height($('#pictures').height()-37);
            $('#pictures div').height($('#pictures').height());            
            $('#pictures ul').width($("#pictures li").width()*$("#pictures li").length);
            $('#pictures ul').height($("#pictures").height());
            $('#pictures img').width($('#pictures').width()-37);
            window.addEventListener("resize", function(){
                     $('#pictures').height($('#pictures img').height());
                    $('#pictures ul li').width($('#pictures').width()-37);
                    $('#pictures div').width($('#pictures').width());
                    $('#pictures ul li').height($('#pictures').height()-37);
                    $('#pictures div').height($('#pictures').height());            
                    $('#pictures ul').width($("#pictures li").width()*$("#pictures li").length);
                    $('#pictures ul').height($("#pictures").height());
                    $('#pictures img').width($('#pictures').width()-37);
            });
            var carImg=$('img');
            carImg.on("load", function(){ 
                    console.log("img load"); 
                    $('#pictures').height($('#pictures img').height());
                    $('#pictures ul li').width($('#pictures').width()-37);
                    $('#pictures div').width($('#pictures').width());
                    $('#pictures ul li').height($('#pictures').height()-37);
                    $('#pictures div').height($('#pictures').height());            
                    $('#pictures ul').width($("#pictures li").width()*$("#pictures li").length);
                    $('#pictures ul').height($("#pictures").height());
                    $('#pictures img').width($('#pictures').width()-37);
            });
        }    

    $('#pictures i').on('click', function(){

        var Wdt=$('#pictures ul li').width();        
        console.log($(this).attr('class'));
        switch($(this).attr('class')){            
            case 'iconBack':
                $('#pictures ul')[0].style.transform='translateX('+(liWdt-=Wdt)+'px)';
            break;
            case 'iconNext':
                $('#pictures ul')[0].style.transform='translateX('+(liWdt+=Wdt)+'px)';
            break;
        }

    });

console.log($(this).attr('class'));

}



*/