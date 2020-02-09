$(function(){
    $(".sideMenu .nLi .text").click(function(){
        if($(this).parent(".nLi").hasClass("on")){
            $(this).next(".sub").slideUp(300,function(){
                $(this).parent(".nLi").removeClass("on")
            });
        }else{
            $(this).next(".sub").slideDown(300,function(){
                $(this).parent(".nLi").addClass("on")
            });
        }
    })
})