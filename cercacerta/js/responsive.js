$(".mobMenuBtnOpen").on('click touchstart', function (event) {
    var this2 = $(this);
    event.preventDefault();   
   // $(".menuList").css('visibility', 'visible');
    $("#DrpDwnMn0-mr3 ul").slideDown();
    $(this)[0].style.transform = "scaleY(0)";
    setTimeout(function () { $(this2)[0].style.display = "none" }, 300);
    $(".mobMenuBtnClose")[0].style.display = "block";
    setTimeout(function () { $(".mobMenuBtnClose")[0].style.transform = "scaleY(1)" }, 400);
    console.log("clicked!");
});

$(".mobMenuBtnClose").on('click touchstart', function (event) {
    var this2 = $(this);
    event.preventDefault();
    $("#DrpDwnMn0-mr3 ul").fadeOut();
    $(this)[0].style.transform = "scaleY(0)";
    setTimeout(function () { $(this2)[0].style.display = "none" }, 300);
    $(".mobMenuBtnOpen")[0].style.display = "block";
    setTimeout(function () { $(".mobMenuBtnOpen")[0].style.transform = "scaleY(1)" }, 400);
    console.log("clicked!");
});
window.addEventListener("resize", function () {
    if ($(document).width() >= (988)) {       
        $(".mobMenuBtnOpen").removeAttr("style");
        $(".mobMenuBtnClose").removeAttr("style");
        $("#DrpDwnMn0-mr3 ul").show();
        
        console.log("yes");
    } else {
        $("body").addClass("mobile");
        if ($(".mobMenuBtnClose").is(":hidden")) {
            //$(".menuList").css('visibility', 'hidden');
            $("#DrpDwnMn0-mr3 ul").hide();
        }
    }
});

$( "#accordion" ).accordion({
    header:"h3", 
    heightStyle:"content"
});

$("a:not(#WRchTxt0-7ze a)").click(function(event){
    event.preventDefault();
})
