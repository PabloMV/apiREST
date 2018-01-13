var pageId = null;
var wdtLength = null;
var liWidth = null;
var totalMenuW = null;
var thispage = null;
var phpContent = null;
var content = null;
var logged = 'no';
var noRepeat=false;


$(document).ready(function () {
    
    //navigator.userAgent.search('Chrome');    Criar função de  verifiocação do navegador. Recurso display flex não funciona em alguns browsers
    if ($(window).width() < 770) {
        $("body").addClass("mobile");
    }

    $('#loader').fadeOut(1000);

      //set page functions
      var setLocation = location.href.split("=");
      switch(setLocation[1]){
        case "home":
            $('.technologies').hide();
        /*  var tl = new TimelineLite();
         var tl2 = new TimelineLite();
         
         if(!noRepeat){
             $('.technology img').css('opacity','0');
             tl.from(".technology", 2, {opacity:0, scale:0, rotation:-1215}).to(".technology", 1, {rotation:-315});
             tl2.from(".technology img", 2, { scale:0, rotation:4860}).to(".technology img", 1, {rotation:675});
             tl.staggerTo('.technologies .technology', 1.4, {rotationY:360, ease:Bounce.easeOut}, .4);
             tl2.staggerTo('.technology img', 1.4, {opacity:1, rotationY:720,
                 transformPerspective:-3, ease:Bounce.easeOut, delay:.4}, .4);
             noRepeat=true;
         } */
        break;
        case "servicos":
            $('.plans').hide();
        break;
    }
    //if ($(this).parent().hasClass(!'active')) {

   /*  $.ajax({
        type: 'POST',
        url: '../includes/return.php',
        data: {'pages':'pages',uToken:window.location.host+'/token'},        
        dataType: 'json',
        cache: false,        
        success: function (result) {
            
            console.log(result);
            phpContent = result;
            console.log(phpContent);
            console.log(JSON.stringify(phpContent));
            for (var menuIndex = 0; menuIndex < phpContent.length; menuIndex++) {
                phpContent[menuIndex].SEO=JSON.parse(phpContent[menuIndex].SEO);
                $('#menuList:nth-of-type(1)').append('<li id="" class="page-id menuItem ' + phpContent[menuIndex].nome.toLowerCase() + ' edit"><a href=?pages=' + phpContent[menuIndex].nome.toLowerCase() + ' id=' + phpContent[menuIndex].nome.toLowerCase() + '  class="menuAnchor' + phpContent[menuIndex].page_id + '">' + phpContent[menuIndex].nome + '</a></li>');
                $('#menuList:nth-of-type(2)').append('<li id="" class="page-id menuItem ' + phpContent[menuIndex].nome.toLowerCase() + ' edit"><a href=?pages=' + phpContent[menuIndex].nome.toLowerCase() + ' id=' + phpContent[menuIndex].nome.toLowerCase() + '  class="menuAnchor' + phpContent[menuIndex].page_id + '">' + phpContent[menuIndex].nome + '</a></li>');
            }
            if (window.location.search === null || window.location.search === undefined || window.location.search === "") {
                pageId = phpContent[0].nome.toLowerCase();
                window.location.search='pages='+phpContent[0].nome.toLowerCase();
                setLocation(window.location.search);              
                
            } else {    
                setLocation(window.location.search);
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
                $('li #'+this.id+':nth-of-type(1)').parent().addClass('active');
                $('li #'+this.id+':nth-of-type(2)').parent().addClass('active');
                console.log(this.classList);
                $('section').attr('id', this.id);
                console.log(this)
                console.log(this.href)
                console.log("event: "+event);

             
                setLocation(this.href);
                startCar(this.id);
            })
            

        },
        complete:function(){
            $('#loader').fadeOut(1000);
        },
        error: function (error) {
            $('section').append('<center><h1>'+error.statusText+'</h1></center>');
            console.log(error);
        },
    }); */


    //}
    console.log(wdtLength);


  /*   function setLocation(este) {
        for (var indMenu = 0; phpContent[indMenu] != null || phpContent[indMenu] != undefined && phpContent[indMenu].page_id <= phpContent.length; indMenu++) {
            //if (phpContent[indMenu] != null || phpContent[indMenu] != undefined) {
            if (este === "https://" + window.location.host + "/index.html?pages=" + phpContent[indMenu].nome.toLowerCase() || este === "http://" + window.location.host + "/index.html?pages=" + phpContent[indMenu].nome.toLowerCase() || este === window.location.origin + window.location.pathname + "?pages=" + phpContent[indMenu].nome.toLowerCase() || este === "?pages=" + phpContent[indMenu].nome.toLowerCase()) {
               
                
                $('title').text('Viancom - ' + phpContent[indMenu].SEO.title);
                $('meta[name="keywords"]').attr('content', phpContent[indMenu].SEO.keywords);
                $('meta[name="description"]').attr('content', phpContent[indMenu].SEO.description);
                $('nav li #' + phpContent[indMenu].nome.toLowerCase() + ':nth-of-type(1)').parent().addClass('active');
                $('nav li #' + phpContent[indMenu].nome.toLowerCase() + ':nth-of-type(2)').parent().addClass('active');
                $('section').attr("id", phpContent[indMenu].nome.toLowerCase());
                $('section').hide();
                $('section').fadeIn().html(phpContent[indMenu].html);

                $('section').change(); //Passar valores de URL na change function--- 
                window.history.pushState('data', phpContent[indMenu].nome, [este]);             
                content = phpContent[indMenu];
                   $('section > center').css({
                      //width: '90%',
                      display: 'flex',
                      flexFlow: 'column',
                      textAlign: 'center',
                      margin: '0 auto'
                  }); 
                
              
            }else{
                console.log('errou');
            }
            //}
            console.log(indMenu);
        } */
    


    console.log('current id page' + $('section').attr('id'));
    startCar($('section').attr('id'));
    console.log(navigator.sayswho());
    /*menu navigation main content flux*/


});


//verify navigator
navigator.sayswho = (function () {
    var ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+(\.\d+)?)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
    return M.join(' ');
});

//menu responsivo
$(".mobMenuBtnOpen").on('click touchstart', function (event) {
    var this2 = $(this);
    event.preventDefault();
    $('header').css('filter', 'blur(20px)');
    $('section').css('filter', 'blur(20px)');
    $('footer').css('filter', 'bflur(20px)');
   // $(".menuList").css('visibility', 'visible');
    $(".menuList").slideDown();
    $(this)[0].style.transform = "scaleY(0)";
    setTimeout(function () { $(this2)[0].style.display = "none" }, 300);
    $(".mobMenuBtnClose")[0].style.display = "block";
    setTimeout(function () { $(".mobMenuBtnClose")[0].style.transform = "scaleY(1)" }, 400);
    console.log("clicked!");
});

$(".mobMenuBtnClose").on('click touchstart', function (event) {
    var this2 = $(this);
    event.preventDefault();
    $('header').css('filter', 'blur(0px)');
    $('section').css('filter', 'blur(0px)');
    $('footer').css('filter', 'blur(0px)');
    $(".menuList").fadeOut();
    $(this)[0].style.transform = "scaleY(0)";
    setTimeout(function () { $(this2)[0].style.display = "none" }, 300);
    $(".mobMenuBtnOpen")[0].style.display = "block";
    setTimeout(function () { $(".mobMenuBtnOpen")[0].style.transform = "scaleY(1)" }, 400);
    console.log("clicked!");
});
window.addEventListener("resize", function () {
    if ($(window).width() > (770 - 15)) {
        $("body").removeClass("mobile");
       // $(".menuList").css('visibility', 'visible');
       $(".menuList").css('display','table');
        $(".mobMenuBtnOpen").removeAttr("style");
        $(".mobMenuBtnClose").removeAttr("style");
        $('header').css('filter', 'blur(0px)');
        $('section').css('filter', 'blur(0px)');
        $('footer').css('filter', 'blur(0px)');
        console.log("yes");
    } else {
        $("body").addClass("mobile");
        if ($(".mobMenuBtnClose").is(":hidden")) {
            //$(".menuList").css('visibility', 'hidden');
            $(".menuList").hide();
            $('header').css('filter', 'blur(0px)');
            $('section').css('filter', 'blur(0px)');
            $('footer').css('filter', 'blur(0px)');
        }
    }
});
//menu flutuante
window.addEventListener("scroll", function () {
    if ($('body').hasClass('mobile')===false && $(window).scrollTop() > $('header').height()) {
        $('.floatMenu').slideDown();
        //$('body:not(.mobile) > section').css('margin-top', ($('nav').height()+15) + 'px')
    } else {
        $('.floatMenu').hide();
        //$('body:not(.mobile) > section').css('margin-top', '10px')
    }
});


