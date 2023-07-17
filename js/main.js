$(document).ready(function(){
    $('.burger').click(function() {
        $('.burger').toggleClass('open-menu')
        $('.menu__items').toggleClass('open-menu')
    });
});