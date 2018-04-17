$(document).ready(function(){
    $('#barsButton').click(function() {
        $('div#leftMenu').addClass('menu');
        $('div#menuRight').addClass('black');
        $('div#leftMenu').css('left','0');
        $('.menuItem').css('display','block');
    });

    $('#closeButton').click(function() {
        $('div#leftMenu').removeClass('menu');
        $('div#menuRight').removeClass('black');
        $('div#leftMenu').css('left','-20%');
        $('.menuItem').css('display','none');
    });
});
