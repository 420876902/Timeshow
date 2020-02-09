
$(document).ready(function(){
    $('.hr_user').hover(function() {
        $(".hr_menu").css('display', 'block');
    }, function() {
       $(".hr_menu").css('display', 'none');
    });

    $(".hr_menu").hover(function() {
       $(this).css('display', 'block');
    }, function() {
       $(this).css('display', 'none');
    })
})