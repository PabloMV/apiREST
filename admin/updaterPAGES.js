var phpContent = null;
var unlock1 = false;
var unlock2 = false;
var unlock3 = false;
var HTMLlogin = null;


$(document).ready(function () {

});

//navigator.userAgent.search('Chrome')
//if ($(this).parent().hasClass(!'active')) {
function startAdmin() {
    $.ajax({
        type: 'POST',
        url: '../includes/return.php',
        data: { 'pages': 'pages', uToken: window.location.origin + window.location.pathname + 'token' },
        dataType: 'json',
        cache: false,
        success: function (result) {
            console.log(result);
            phpContent = result;
            console.log(phpContent);
            console.log(JSON.stringify(phpContent));
            for (var menuIndex = 0; menuIndex < phpContent.length; menuIndex++) {
                phpContent[menuIndex].SEO = JSON.parse(phpContent[menuIndex].SEO);
                $('#menuList:nth-of-type(1)').append('<li id="" class="page-id menuItem ' + phpContent[menuIndex].nome.toLowerCase() + ' edit"><a href=#pages=' + phpContent[menuIndex].nome.toLowerCase() + ' id=' + phpContent[menuIndex].nome.toLowerCase() + '  class="menuAnchor' + phpContent[menuIndex].page_id + '">' + phpContent[menuIndex].nome + '</a></li>');
                $('#menuList:nth-of-type(2)').append('<li id="" class="page-id menuItem ' + phpContent[menuIndex].nome.toLowerCase() + ' edit"><a href=#pages=' + phpContent[menuIndex].nome.toLowerCase() + ' id=' + phpContent[menuIndex].nome.toLowerCase() + '  class="menuAnchor' + phpContent[menuIndex].page_id + '">' + phpContent[menuIndex].nome + '</a></li>');
            }
            if (window.location.hash === null || window.location.hash === undefined || window.location.hash === "") {
                pageId = phpContent[0].nome.toLowerCase();
                window.location.hash='pages='+phpContent[0].nome.toLowerCase();                
                setLocation(window.location.hash);
            } else {    
                setLocation(window.location.hash);
            }

            $('#menu li a').on('click', function (event) {
                event.preventDefault();
                if ($("body").hasClass('mobile')) {
                    $(".mobMenuBtnClose")[0].style.transform = "scaleY(0)";
                    setTimeout(function () { $(".mobMenuBtnClose")[0].style.display = "none" }, 300);
                    $(".mobMenuBtnOpen")[0].style.display = "block";
                    setTimeout(function () { $(".mobMenuBtnOpen")[0].style.transform = "scaleY(1)" }, 400);
                    $(".menuList").fadeOut();
                    $('header').css('filter', 'blur(0px)');
                    $('section').css('filter', 'blur(0px)');
                    $('footer').css('filter', 'blur(0px)');
                }
                pageId = this.id;

                $('#menu li').removeClass('active');
                console.log(phpContent);
                console.log(this.classList);
                $('li #' + this.id + ':nth-of-type(1)').parent().addClass('active');
                $('li #' + this.id + ':nth-of-type(2)').parent().addClass('active');
                console.log(this.classList);
                $('section').attr('id', this.id);
                console.log(this)
                console.log(this.href)
                console.log("event: " + event);                
                setLocation(this.href);
                startCar(this.id);                
            })

        },
        error: function (error) {
            console.log(error);
        }


    });
    
}


function setEditorsController(){

             $("section h1, section h2, section p").addClass('edited');
            $('<div id="loader"><span id="spin"></span></div>').insertBefore('section img');
            $('section img').attr('onload', "$(this).siblings().fadeOut()");


            $("section .edited").hover(function () {
                if ($(this).hasClass('edited')) {
                    $(this).append('<i class="material-icons left">report_problem</i><i class="material-icons right">report_problem</i>');
                }
            },
                function () {
                    $('.edited i.material-icons').remove();
                });

            $("section h1, section h2, section p").on('click', function (event) {

                var thisEL = this;
                event.preventDefault();
                $('.edited i.material-icons').remove();
                var thistext = $(this).not('i.material-icons').text();

                if ($(this).hasClass('edited')) {
                    $(this).wrap("<div id='editTxtControll' style='transform:scaleY(0)'></div>");
                    $(this).text(' ');
                    $(this).append('<i class="material-icons careful">error</i><textarea>' + thistext + '</textarea><div id="confirm" onclick="save(this)">OK</div>');
                    $(this).removeClass('edited');
                    $(this).addClass('editing');
                    $("textarea").css('width', '90%');
                    console.log("it's works!!!");

                    setTimeout(function () {
                        $(thisEL).find("textarea").height($(thisEL)[0].children[1].scrollHeight);
                        $(thisEL).parent().css('transform', 'scaleY(1)');
                    }, 200);
                }
            })
            
            
}



function setLocation(este) {
    for (var indMenu = 0; phpContent[indMenu] != null || phpContent[indMenu] != undefined && phpContent[indMenu].page_id <= phpContent.length; indMenu++) {
        phpContent[indMenu].SEO = phpContent[indMenu].SEO;
        //phpContent[indMenu].SEO = JSON.parse(phpContent[indMenu].SEO);
        //if (phpContent[indMenu] != null || phpContent[indMenu] != undefined) {
        if (este === "https://" + window.location.host + "/index.html#pages=" + phpContent[indMenu].nome.toLowerCase() || este === "http://" + window.location.host + "/index.html#pages=" + phpContent[indMenu].nome.toLowerCase() || este === window.location.origin + window.location.pathname + "#pages=" + phpContent[indMenu].nome.toLowerCase() || este === "#pages=" + phpContent[indMenu].nome.toLowerCase()) {
            window.history.pushState('data', phpContent[indMenu].nome, [este]);
            // $('title').text('Viancom - '+phpContent[indMenu].SEO.title);
            //  $('meta[name="keywords"]').attr('content',phpContent[indMenu].SEO.keywords);
            //  $('meta[name="description"]').attr('content',phpContent[indMenu].SEO.description);
            $('input[name="page_id"]').val(phpContent[indMenu].page_id);
            // $('textarea').hide();
            $('textarea').html(phpContent[indMenu].html);
            $('section').html(phpContent[indMenu].html);
            $('textarea').change(); //Passar valores de URL na change function---              
            // content = phpContent[indMenu];
            /*  $('textarea > center').css({
                  width: '90%',
                  display: 'flex',
                  flexFlow: 'column wrap',
                  textAlign: 'center',
                  margin: '0 auto'
              });*/


        }


        //$('section img').attr('src', "/" + $('section img').attr('src'));
        
        //setEditorsController();
        //}
        console.log(indMenu);
    }
    $('section img').attr('src', "../" + $('section img').attr('src'));//SERVER
    //$('section img').attr('src', "/" + $('section img').attr('src'));//LOCAL
    setEditorsController();
}

function save(button) {
    var thisParent = $(button)[0].parentNode;
    var thistext = $(button).parent().find('textarea').val();
    setTimeout(function () {
        $(thisParent).removeClass('editing');
        $(thisParent).addClass('edited');
    }, 200);
    console.log();
    console.log(thistext);

    $(thisParent).text(thistext);

    $(thisParent).find('#editTxtControll').remove();
    $(thisParent).unwrap();

};

//*************login section*****************//

//toggle login and register sections 
$("#wrapSel a").on("click", function (event) {
    event.preventDefault();
    if ($(this).hasClass('login')) {
        $(this).addClass('active');
        $('.register').removeClass('active');
        $('#newUser').fadeOut();
        $('#login').delay(400).fadeIn();
    }
    if ($(this).hasClass('register')) {
        $(this).addClass('active');
        $(".login").removeClass('active');
        $('#login').fadeOut();
        $('#newUser').delay(400).fadeIn();

    }

});
///End toggle login section


//Validation of register fields on every keyup in the fields
$("#newUser input").on("keyup", function () {
    /*switch ($(this).attr('id')) {
        case 'regEmail':
            var emailChars = $(this).val();
            var countSpecChar = 0;
            var countDots = 0;
            for (var i = 0; emailChars.length > i; i++) {
                if (emailChars[i] === '@') {
                    countSpecChar++;
                }
                if (emailChars[i] === '.') {
                    countDots++;
                }
            };
            if (countSpecChar <= 1 && countDots <= 2 && countSpecChar > 0 && countDots > 0) {
                // console.log($(this).val().contains('@'));
                $(this).css('border', '3px solid green')
                console.log('Valid');
                unlock1 = true;
            } else {
                $(this).css('border', '3px solid red')
                console.log('email validation error');
                unlock1 = false;
            };
            break;
          case 'regPass':
              var passChars = $(this).val();
              if (passChars.length > 8) {
                  // console.log($(this).val().contains('@'));
                  $(this).css('border', '3px solid green')
                  console.log('Valid');
                  unlock2 = true;
              } else {
                  $(this).css('border', '3px solid red')
                  console.log('pass validation error');
                  unlock2 = false;
              };
              console.log(passChars.length);
              break;
          case 'confPass'.length != 0:
              if ($(this).val() === $('#regPass').val()) {
                  // console.log($(this).val().contains('@'));
                  $(this).css('border', '3px solid green')
                  console.log('Valid');
                  unlock3 = true;
              } else {
                  $(this).css('border', '3px solid red')
                  console.log('pass validation error');
                  unlock3 = false;
              };
              break;
    }*/

    var emailChars = $('#regEmail').val();
    var countSpecChar = 0; //recive every "@"" chars in email field
    var countDots = 0; //recive every "."" (dot) chars in email field
    var passChars = $('#regPass').val();
    var confPassVal = $('#confPass').val();
    var regPassVal = $('#regPass').val()




    for (var i = 0; emailChars.length > i; i++) {  // count the "@"and . (dots) in the field
        if (emailChars[i] === '@') {
            countSpecChar++;
        }
        if (emailChars[i] === '.') {
            countDots++;
        }
    };
    if ($(this).attr('id') === 'regEmail') {// check the field is email
        if (countSpecChar === 1 && countDots > 0 && countDots <= 5 && emailChars.search(" ")===-1) {//set the  limit to dots and @ to validate email
            // console.log($(this).val().contains('@'));
            $('#regEmail').css('border', '3px solid green')
            console.log('Valid');
            unlock1 = true;
        } else {
            $('#regEmail').css('border', '3px solid red')
            console.log('email validation error');
            unlock1 = false;
        }
    }

    if (emailChars.length === 0) {// no warning borders if the email field's enpty
        $('#regEmail').removeAttr('style');
    }

    if (passChars.length != 0) {
        if (passChars.length > 8) {// Set the min pass length  tpo valid password
            // console.log($(this).val().contains('@'));
            $('#regPass').css('border', '3px solid green')
            console.log('Valid');
            unlock2 = true;
        } else {
            $('#regPass').css('border', '3px solid red')
            console.log('pass validation error');
            unlock2 = false;
        }
        console.log(passChars.length);
    } else {
        $('#regPass').removeAttr('style');
    }

    if (confPassVal.length > 0 && regPassVal.length > 0) {//validate the filed confirm pass if its the same value os pass field
        if (confPassVal === regPassVal) {
            // console.log($(this).val().contains('@'));
            $('#confPass').css('border', '3px solid green')
            console.log('Valid: ' + $('#confPass').val() + " == " + $('#regPass').val());
            unlock3 = true;
        } else {
            $('#confPass').css('border', '3px solid red')
            console.log('pass validation error');
            console.log('Invalid: ' + confPassVal + " != " + regPassVal);
            unlock3 = false;
        }
    } else {
        $('#confPass').removeAttr('style');
    }

    if (unlock1 && unlock2 && unlock3) { // verify the all conditions returns true and enable button register
        $('#regSubmit').removeAttr('disabled');
        console.log('unlocking!!!');
    } else {
        $('#regSubmit').attr('disabled', 'disabled');
        console.log('Lock!!!');
    }

});

$('button').on("click", function () {
    var uName = $("#logName").val();
    var uPass = $("#logPass").val();
    var name = $("#regName").val();
    var email = $('#regEmail').val();
    var pass = $('#regPass').val();
    var reqType = null

    switch ($(this).attr('id')) {
        case 'regSubmit':
            reqType = $('.requestType2').val();
            $.ajax({
                type: 'POST',
                url: '../services/loginWS.php',
                data: { 'name': name, 'email': email, 'pass': pass, 'reqType': reqType },
                dataType: 'json',
                cache: false,
                success: function (result) {
                    console.log(result);
                    alert('Cadastrado! efetue seu login agora!');;
                },
                error: function (jqXHR) {
                    console.log(jqXHR);
                    alert(jqXHR.responseText);
                }
            })
            break;
        case 'loginSubmit':
            reqType = $('.requestType').val();
            $.ajax({
                type: 'POST',
                url: '../services/loginWS.php',
                data: { 'email': uName, 'pass': uPass, 'reqType': reqType },
                dataType: 'json',
                cache: false,
                success: function (result) {
                    HTMLlogin = $('body').html();
                    $('body').load(result.url);
                    $('body').on('load', startAdmin());
                    window.onbeforeunload = function(){ return confirm()};
                   
                   
                   
                    
                    console.log(result);
                    //alert('logado!');             ;
                },
                error: function (jqXHR) {
                    console.log(jqXHR);
                    alert(jqXHR.responseText);
                }
            })
    }
})