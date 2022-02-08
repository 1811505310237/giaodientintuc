$(document).ready(function () {
    //khi click vào menu mobile 
    $('.icon-tog').click(function (e) { 
        e.preventDefault();

        $('nav').slideToggle();
    });
    // end code khi click vào menu moble

    //code xử lí khi mà đổi lại màn hình PC mà nav bị ẩn
    $(window).resize(function () { 
        if($(window).width() > 576){
            $('nav').addClass('show');
        }else{
            $('nav').removeClass('show');
        }
    });
    // end code xử lí màn hình PC
});