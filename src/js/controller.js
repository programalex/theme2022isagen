$(function(){
    var url = window.location.href;
    var str = url.split('#'); 
    var anchor =  str[1];
    
    if(anchor == 'red-de-transparencia-y-participacion-ciudadana' || anchor == 'transparency-and-citizen-participation-network' || anchor == 'accion-colectiva' || anchor == 'collective-action' || anchor=='lineas-de-accion'){
        $('#menu-tabs').find('.active').removeClass('active');
        $('li[data-tab="tab-5"]').addClass('active');

        $('#tabs-etica-empresarial').find('.tab-active').removeClass('tab-active');
        $('#tab-5').addClass('tab-active');

        location.href = '#' + anchor;

        if(anchor == 'red-de-transparencia-y-participacion-ciudadana' || anchor == 'transparency-and-citizen-participation-network'){
            $('#' + anchor).trigger('click');
        }
    }

    if(anchor == 'canal-etico' || anchor == 'ethics-channel'){
        $('#tabs-etica-empresarial').find('.tab-active').removeClass('tab-active');
        $('#tab-3').addClass('tab-active');

        $('#menu-tabs').find('.active').removeClass('active');
        $('li[data-tab="tab-3"]').addClass('active');

        location.href = '#' + anchor;         
    }

    //Remueve el opacity 0 agregado desde el CMS
    $('body').css('opacity', '1');
});

