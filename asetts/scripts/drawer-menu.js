$(function(){

    $('.c-header-hamburger-menu').click(function(){
        
        var judge = $('.c-header-hamburger-menu').hasClass('open');
        
        if(judge === true){
            $('.c-header-drawer-menu').removeClass('open');
            $(this).removeClass('open');
        }else{
            $('.c-header-drawer-menu').addClass('open');
            $(this).addClass('open');  
        }
        
    })
    
});