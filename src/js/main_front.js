var global = {};

jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ){
        if ( ns.includes("noPreventDefault") ) {
        this.addEventListener("touchstart", handle, { passive: false });
        } else {
        this.addEventListener("touchstart", handle, { passive: true });
        }
    }
};

jQuery.event.special.touchmove = {
    setup: function( _, ns, handle ){
        if ( ns.includes("noPreventDefault") ) {
        this.addEventListener("touchmove", handle, { passive: false });
        } else {
        this.addEventListener("touchmove", handle, { passive: true });
        }
    }
};

function resizeSliderSostenibilidad(){
    if($('.slider2').length > 0){
        if (screen.width<921){
            $('.slider2').bxSlider({
                slideWidth: 750,
                minSlides: 1,
                maxSlides: 1
            });
        } 
       else {
          $('.slider2').bxSlider({
            slideWidth: 400,
            minSlides: 3,
            maxSlides: 3/*,
            infiniteLoop: false,
            hideControlOnEnd: true*/
          });
       }
    }    
}

function events(){

   if($('#content form').length){
        $('#content form')[0].reset(); 
   }   

    $('a').click(function(e){
        var str = $(this).text();
        if(str === "Noticias"){
           e.preventDefault();
           console.log(location.href= objGlobal.url_path + "/nosotros/enterate/_/noticias");
           window.location.href= objGlobal.url_path + "/nosotros/enterate/_/noticias";
        }else if(str === "News"){
           e.preventDefault();
           window.location.href= objGlobal.url_path + "/about-us/learn/_/news";
        }
    });

    $( ".pago_pse" ).click(function() {
        alert( "Por favor tenga en cuenta que los pagos realizados por este medio despues de las 3 p.m. el dia del vencimiento de la factura, son efectivamente abonados en nuestra cuenta por cualquier medio de la red bancaria, el día siguiente. Esto origina automaticamente en nuestro sistema una factura por intereses de mora." ); 
    });

    //Proyectos en estudio
    //Interaccion mapa Proyectos en Estudio
    $('#proyectos-hidroelectricos, #hydroelectric-generation-projects').click(function(){
        $('div[data-value="piedra-del-sol"]').trigger('click');
    });    
    $('#proyectos-eolicos, #wind-farms').click(function(){
        $('div[data-value="guajira-i"]').trigger('click');
    });
    $('#proyectos-geotermicos, #geothermal-projects').click(function(){
        $('div[data-value="macizo-volcanico-ruiz"]').trigger('click');
    });

    $('.proyecto').click(function(){
        var proyecto = $(this).attr('data-value');
        $('#mapa-marcadores-proy-estudio').find('.active').removeClass('active');
        $('#mapa-marcadores-proy-estudio').find('div[data-value="'+proyecto+'"]').addClass('active');                
    });

    var altura_inicial_grid = $('.grid-hidroelectricas.grid-proyectos-en-estudio').height();
    $('.en-estudio, .proyecto').click(function(){
        $('.grid-hidroelectricas.grid-proyectos-en-estudio').height(altura_inicial_grid);
    });

    //Sliders Proyectos en Estudio
    if($('.slider-proyectos-estudio').length > 0){
        $('.slider-proyectos-estudio').each(function(e){
            proyecto = $(this).attr('value');
            $('#proyecto-'+proyecto).bxSlider({
                mode: 'horizontal',
                slideWidth: 450,
                minSlides: 1,
                infiniteLoop: false,
                hideControlOnEnd: true
            });
        });
        resizeTabs();
    }

    if($('.grid-proyectos-en-estudio').length > 0){        
       project = getAnclaUrl();
        if(project == 'proyectos-hidroelectricos' || project == 'hydroelectric-generation-projects'){
            $('#tab-content').find('.tab-active').removeClass('tab-active');
            $('#hidroelectricos').addClass('tab-active');
            $('div[data-value="piedra-del-sol"]').trigger('click');
            resizeTabs();
        }
        if(project == 'proyectos-eolicos' || project == 'wind-farms'){            
            $('#tab-content').find('.tab-active').removeClass('tab-active');
            $('#eolicos').addClass('tab-active');
            $('div[data-value="guajira-i"]').trigger('click');
            resizeTabs();
        }
        if(project == 'proyectos-geotermicos' || project == 'geothermal-projects'){            
            $('#tab-content').find('.tab-active').removeClass('tab-active');
            $('#geotermicos').addClass('tab-active');
            $('div[data-value="macizo-volcanico-ruiz"]').trigger('click');
            resizeTabs();
        }
    }

    //Funcionalidad tabs Proyectos en estudios
    if($('#grid-hidroelectricas.grid-proyectos-en-estudio').length > 0){
        $('#grid-hidroelectricas.grid-proyectos-en-estudio .en-estudio').click(function(){
            var tab = $(this).attr('data-value');

            $('#grid-hidroelectricas.grid-proyectos-en-estudio').find('.tab-active').removeClass('tab-active');
            $(this).addClass('tab-active');

            $('#tab-content').find('.tab-active').removeClass('tab-active');
            $('#'+tab).addClass('tab-active');
            resizeTabs();
        })
    }

    if($('#hidroelectricos').length > 0){
        $('#hidroelectricos .proyectos .proyecto').click(function(){
            var tab = $(this).attr('data-value');

            $('#hidroelectricos .proyectos').find('.active').removeClass('active');
            $(this).addClass('active');
            
            $('#content-tabs-hidroelectricos').find('.active').removeClass('active');
            $('#'+tab).addClass('active');
            resizeTabs();
        })
    }

    if($('#eolicos').length > 0){
        $('#eolicos .proyectos .proyecto').click(function(){
            var tab = $(this).attr('data-value');

            $('#eolicos .proyectos').find('.active').removeClass('active');
            $(this).addClass('active');

            $('#content-tabs-eolicos').find('.active').removeClass('active');
            $('#'+tab).addClass('active');
            resizeTabs();
        })
    }
    if($('#geotermicos').length > 0){
        $('#geotermicos .proyectos .proyecto').click(function(){
            var tab = $(this).attr('data-value');

            $('#geotermicos .proyectos').find('.active').removeClass('active');
            $(this).addClass('active');

            $('#content-tabs-geotermicos').find('.active').removeClass('active');
            $('#'+tab).addClass('active');
            resizeTabs();
        })
    }

    //Funcionalidad tooltips
    $('#mapa-marcadores-proy-estudio .marcador').click(function () {
        var marcador = $(this).attr('data-value');
        $('#mapa-marcadores-proy-estudio').find('.active').removeClass('active');
        $('#mapa-marcadores-proy-estudio').find('div[data-value="' + marcador + '"]').addClass('active');

        if (marcador === 'piedra-del-sol' || marcador === 'rio-patia' || marcador === 'palagua' || marcador === 'nare' || marcador === 'san-bartolome' || marcador === 'tafetanes') {
            $('#tab-content').find('.tab-active').removeClass('tab-active');
            $('#hidroelectricos').addClass('tab-active');
            $('.proyecto.[data-value="' + marcador + '"]').trigger('click');
        } else if (marcador === 'macizo-volcanico-ruiz') {
            $('#tab-content').find('.tab-active').removeClass('tab-active');
            $('#geotermicos').addClass('tab-active');
        } else if (marcador === 'guajira-ii') {
            $('#tab-content').find('.tab-active').removeClass('tab-active');
            $('#eolicos').addClass('tab-active');
            $('.proyecto.[data-value="guajira-ii"]').trigger('click');
        } else if (marcador === 'guajira-i') {
            $('#tab-content').find('.tab-active').removeClass('tab-active');
            $('#eolicos').addClass('tab-active');
            $('.proyecto.[data-value="guajira-i"]').trigger('click');
        }
        //resizeTabs();
    });

    function resizeTabs(){
        var altura_oculta_tab_activo = $('.tab-hidroelectricas.tab-active > .tabs-proyectos').find('.info-proyecto.active').height();
        var altura_visible_tab_activo = $('.tab-hidroelectricas.tab-active > .tabs-proyectos').height();
        var altura_grid = $('.grid-hidroelectricas.grid-proyectos-en-estudio').height();
        var altura_adicional = altura_oculta_tab_activo - altura_visible_tab_activo + 120;

        if(altura_adicional <= 0){
            return;
        }else{
            $('.grid-hidroelectricas.grid-proyectos-en-estudio').height(altura_grid + (altura_adicional));
        }
    }
    // Fin Proyectos en estudio

    //Funcionalidad tabs Sistema Ético Empresarial
    if ($('#sistema-etico-tab').length > 0) {
        $('#sistema-etico-tab .sist-etica').click(function () {
            var tab = $(this).attr('data-value');

            $('#sistema-etico-tab').find('.active').removeClass('active');
            $(this).addClass('active');

            $('.sistema-etica-right').find('.tabShow').removeClass('tabShow').addClass('tabHide');
            $('#' + tab).addClass('tabShow');

            if($('#sistema-etico-tab').attr("value-ancla") == "ancla"){
                var desktop = $('#sistema-etico-tab').attr("ancla-desktop")
                enlace  = '#ancla';
                if (desktop == 'true') {
                    $('html, body').animate({
                        scrollTop: $(enlace).offset().top - 100
                    }, 500);
                }else if(screen.width <= 480){
                    $('html, body').animate({
                        scrollTop: $(enlace).offset().top - 100
                    }, 500);
                }
            }
        })
    }
    // Fin Funcionalidad tabs Sistema Ético Empresarial

    $('.fieldForm > input, .TextAreaForm > textArea').focus( function() {
        $(this).parent().addClass('animated-placeholder');
    });

    /*$('#table-ver-mas').click(function(){
        if(screen.width > 767){        
            $('.table-see-more .table .table-row').css({ display: "table-row"});
        }else{
            $('.table-see-more .table .table-row').css({ display: "table"});
        }
        $(this).hide();
    });*/
    /*
    $('.inputSelect').on('change', function (e) {
        if($(this).parent().siblings('label').length > 0){
            if(!$(this).hasClass("changed")){
                $(this).parent().siblings('label').show();    
                $(this).addClass("changed")
            }
        }else if($(this).siblings('label').length > 0){
            if(!$(this).hasClass("changed")){
                $(this).siblings('label').show();  
                $(this).addClass("changed")
            }
        }
        
    });
    */
	$('.fieldForm select.inputSelect').change(function(){
		if(!$(this).hasClass('changed')){
			$(this).parents(".fieldForm").addClass('animated-placeholder');
			$(this).addClass('changed');		
		}else{
			if($(this).val()==""){
				$(this).removeClass('changed');
				console.log($(this).attr('class'));
				$(this).parents(".fieldForm").removeClass('animated-placeholder');
			}
		}
	});

    $('.fieldForm > input, .TextAreaForm > textArea').blur( function() {
        val = $(this).val();
        if(val == ""){
            $(this).parent().removeClass('animated-placeholder');
        }
    });

    $('#buscarHeader').on('click',function(){
      $('#inboxHeader').addClass("inboxHeaderActiva");
    });

    $('#searchClose').on('click',function(){
      $('#inboxHeader').removeClass("inboxHeaderActiva");
    });

    $('#_3_keywords').focus( function() {
        $('#searchPlaceholder').addClass('searhfocus');
        $(this).css({ "color": "white"});
    });

    $('#searchPlaceholder').on('click', function() {
        $('#_3_keywords').focus();
        $('#searchPlaceholder').addClass('searhfocus');        
    });

    $('#_3_keywords').blur( function() {
        $('#searchPlaceholder').removeClass('searhfocus');
        $(this).css({ "color": "transparent"});
    });

    if($('#slider').length > 0){
        $('#slider').bjqs({  
            // PARAMETROS OPCIONALES QUE NOS OFRECE EL PLUGIN
            width : 2600,
            height : "100vh",
            
            // animation values
            animtype : 'fade', // accepts 'fade' or 'slide'
            animduration : 500, // how fast the animation are
            animspeed : 10000, // the delay between each slide
            automatic : true, // automatic
            
            // control and marker configuration
            showcontrols : true, // show next and prev controls
            centercontrols : true, // center controls verically
            showmarkers : true, // Show individual slide markers
            centermarkers : true, // Center markers horizontally
            
            // interaction values
            keyboardnav : true, // enable keyboard navigation
            hoverpause : true, // pause the slider on hover
            
            // presentational options
            usecaptions : true, // show captions for images using the image title tag
            responsive : true // enable responsive capabilities (beta)
            
        });
    }

	if ($('#sliderObjective').length > 0) {
        $('#sliderObjective').bjqs({
            // PARAMETROS OPCIONALES QUE NOS OFRECE EL PLUGIN
            width: 2600,
            height: "105px",

            // animation values
            animtype: 'fade', // accepts 'fade' or 'slide'
            animduration: 500, // how fast the animation are
            animspeed: 10000, // the delay between each slide
            automatic: true, // automatic

            // control and marker configuration
            showcontrols: true, // show next and prev controls
            centercontrols: true, // center controls verically
            showmarkers: true, // Show individual slide markers
            centermarkers: true, // Center markers horizontally

            // interaction values
            keyboardnav: true, // enable keyboard navigation
            hoverpause: true, // pause the slider on hover

            // presentational options
            usecaptions: true, // show captions for images using the image title tag
            responsive: true // enable responsive capabilities (beta)

        });
    }

   resizeSliderSostenibilidad();

    //Riesgos ------
   if ($(".Graficos").length > 0) {
        mostrar();
        mostrar2();
    }
    // ------
    
   var load = true;
   var statehoverMenu = false;
   $(window).scroll(function(){
        var barra=$(window).scrollTop();
        //if (screen.width>1100){
            if ($('#nav.navFixed').length > 0) {
                $('#nav').css({"top": "0px"});
            }else{
                $('#nav').css({"top": "30px"});
            }
            //Menu fijo
            function esconderMenu(callback){
                $('#nav').hover(function(){
                    callback(true);
                },function(){
                    callback(false);
                });
            }
            if ($('#nav').find('.megaMenuActivo').length == 0) {
                if (barra > 35) {
                    $('#nav').addClass('navFixed');
                    clearTimeout( $.data( this, "scrollCheck" ) );
                    $.data(this, "scrollCheck", setTimeout(function() {
                        if ($('#nav.navFixed').length > 0) {
                            esconderMenu(function(hover){
                                if(hover){
                                    if ($('#nav.navFixed').length > 0) {
                                        $('#nav').css({"top": "0px"});
                                        load = false;
                                        statehoverMenu = false;
                                    }
                                }else{
                                    if ($('#nav.navFixed').length > 0) {
                                        statehoverMenu = true;
                                        $('#nav').css({"top": "-80px"});
                                    }
                                }
                            });
                            if (load) {
                                $('#nav').css({"top": "-80px"});
                            }
                        }else{
                            $('#nav').css({"top": "30px"});
                        }
                    }, 1000)); 
                    clearTimeout( $.data( this, "scrollStop" ) );
                    $.data(this, "scrollStop", setTimeout(function() {
                        if (barra == $(window).scrollTop() && statehoverMenu) {
                            $('#nav').css({"top": "-80px"});
                        }
                    }, 2000)); 
                }else{
                    $('#nav').removeClass('navFixed');
                }
            //}
        }        

     //contador cifras
     function numberFormat(numero){
        // Variable que contendra el resultado final
        var resultado = "";
        // Si el numero empieza por el valor "-" (numero negativo)
        if(numero[0]=="-")
        {
            // Cogemos el numero eliminando los posibles puntos que tenga, y sin
            // el signo negativo
            nuevoNumero=numero.replace(/\./g,'').substring(1);
        }else{
            // Cogemos el numero eliminando los posibles puntos que tenga
            nuevoNumero=numero.replace(/\./g,'');
        }
        // Si tiene decimales, se los quitamos al numero
        if(numero.indexOf(",")>=0)
            nuevoNumero=nuevoNumero.substring(0,nuevoNumero.indexOf(","));
        // Ponemos un punto cada 3 caracteres
        for (var j, i = nuevoNumero.length - 1, j = 0; i >= 0; i--, j++)
            resultado = nuevoNumero.charAt(i) + ((j > 0) && (j % 3 == 0)? ".": "") + resultado;
 
        // Si tiene decimales, se lo añadimos al numero una vez forateado con 
        // los separadores de miles
        if(numero.indexOf(",")>=0)
            resultado+=numero.substring(numero.indexOf(","));
        if(numero[0]=="-")
        {
            // Devolvemos el valor añadiendo al inicio el signo negativo
            return "-"+resultado;
        }else{
            return resultado;
        }
    }

    function incrementarCifras() {
        var energiaInt = 0; 
        var energiaDec = 0;
        var generacion = 0;
        var capacidad = 0;
        var promedio = 0;
        var estudio = 0;        

        var IntGeneracion = setInterval(function(){
            if (generacion == $('#cifrasImpactoGeneracion').attr('data-value')) {
                clearInterval(IntGeneracion);
            } else {
                $('#cifrasImpactoGeneracion').html(++generacion);
            }
        },100);
        var IntCapacidad = setInterval(function(){
            var limitCapacidad = $('#cifrasImpactoCapacidad').attr('data-value');
            if (capacidad >= parseInt(limitCapacidad)) {
                clearInterval(IntCapacidad);
            } else {
                var incremento = capacidad <= (limitCapacidad * 0.97) ? 100 : 2;
                capacidad = capacidad + incremento;
                $('#cifrasImpactoCapacidad').html(numberFormat(capacidad.toString()) + " MW");
            }
        },40);
        var IntPromedio = setInterval(function(){
            if (promedio == $('#cifrasImpactoPromedio').attr('data-value')) {
                clearInterval(IntPromedio);
            } else {
                promedio = promedio + 1;
                /*Permite agregar la abreviación de tercera (3a ó 3rd) dependiendo 
                 * del idioma*/     
                var urlPag = window.location.href;
                var separador = "/en/";
                var arrSubcadenas = urlPag.split(separador);
                if (arrSubcadenas.length >= 2){
                $('#cifrasImpactoPromedio').html(numberFormat(promedio.toString()) + "rd");                
                }
                else{
                $('#cifrasImpactoPromedio').html(numberFormat(promedio.toString()) + "a");
                }
            }
        },100);
        var IntEnergia = setInterval(function(){
            var val =  SeparateNum($('#cifrasImpactoEnergia').attr('data-value'));
            if (energiaDec == val[1] && energiaInt == val[0]) {                 
                clearInterval(IntEnergia);          
            } else if (energiaInt == val[0]) {
                $('#cifrasImpactoEnergia').html(energiaInt+","+(++energiaDec)+"%");                 
            } else {
                $('#cifrasImpactoEnergia').html(++energiaInt+"%"); 
            }
        },5);
        var IntEstudio = setInterval(function(){
            var limitEstudio = $('#cifrasImpactoEstudio').attr('data-value');
            if (estudio >= parseInt(limitEstudio)) {
                clearInterval(IntEstudio);
            } else {
                var incremento = estudio <= (limitEstudio * 0.8) ? 2 : 1;
                estudio += incremento;
                $('#cifrasImpactoEstudio').html(numberFormat(estudio.toString()));
            }
        },30);
        
    }
    
    function StopIncrementar(){
        clearInterval(contador);
    }

   function SeparateNum(num){
       var val = num.split(".").map(Number);
       return val;
   }

    if($('#animacionInfografico').length > 0){
        if (screen.width>768) {
            if (barra > 800) {
                var activarAnimacion = $('#animacionInfografico').attr('data-animacion');
                if(activarAnimacion == "true"){
                    incrementarCifras();
                    $('#animacionInfografico').attr('data-animacion','false');
                }
            }
        }else{
            if (barra > 1200) {
                var activarAnimacion = $('#animacionInfografico').attr('data-animacion');
                if(activarAnimacion == "true"){
                    incrementarCifras();
                    $('#animacionInfografico').attr('data-animacion','false');
                }
            }
        }
    }
    
     var posicion=barra*0.4;

     $(".nuestroimpacto").css({
       'background-position': '0 -'+posicion+'px' 
     });
     if (screen.width>921){
     $(".img1, .img2, .img3, .img4").css({
       'background-position': 'center -'+posicion+'px', 
       '-webkit-box-shadow': 'inset 0px -59px 270px 50px rgba(0,0,0,'+(posicion*0.004)+')',
        '-moz-box-shadow': 'inset 0px -59px 270px 50px rgba(0,0,0,'+(posicion*0.004)+')',
        'box-shadow': 'inset 0px -59px 270px 50px rgba(0,0,0,'+(posicion*0.004)+')'
     });
     }
     
   });   

   //Funcionalidad de menú responsive   
    $("#backMegaMenu").on('click',function(){
        if($('nav').find('.megaMenuActivo').length > 0){
            $('#nav').find('.megaMenu.megaMenuActivo').removeClass('megaMenuActivo');
            $('#nameItem').html(" ");
            $('#nameItem').hide();
        }else{
            $('#nav').find('.menu.menuActivo').removeClass('menuActivo');
        }
    
    });

    var proveedores = false;
    $('.menuItem').on('click', function(){
        if ($(this).find(".megaMenu").length > 0) {
            var nombre = $(this).find('a:first-child').html();
            var color = $(this).find('a:first-child').attr("data-color");
            men = nombre.split("<div");
            if (color == "azul") {
                $('#nameItem').css({'background':"#2e73ba"});
            }else if(color == "azul-claro"){
                $('#nameItem').css({'background':"#429dd1"});
            }else if(color == "verde"){
                $('#nameItem').css({'background':"#6bc455"});
            }else if(color == "rojo"){
                $('#nameItem').css({'background':"#f71700"});
            }else{
                $('#nameItem').css({'background':"#f7c300"});
            }
            $('#nameItem').html(men[0]);
            $('#nameItem').show();
            if(proveedores == false){
                $(this).find(".megaMenu").addClass('megaMenuActivo');
            }
            
        }
    });

    $('#menuMovil').on('click', function(){
        $('#menu').addClass('menuActivo');
    });

    $('.itemMegaMenu > h3').on('click',function(){
        $(this).siblings('ul').toggleClass("alturaAuto");
        $(this).find('.abrirMenu').toggleClass("cerrarMenu");
    })

    $('.megaMenu').hover(function(){ 
        $(this).parent(".menuItem").addClass('menuItembarHoverMegaMenu'); 
    }, function(){
        $(this).parent(".menuItem").removeClass('menuItembarHoverMegaMenu'); 
    });

    if(document.getElementById('slider')){
        var slider = document.getElementById('slider');
        var mc = new Hammer(slider);

        mc.on("swiperight", function(ev) {
            if($('.bjqs-markers').children('.active-marker').next().length > 0){
                $('.bjqs-markers').children('.active-marker').next().find('a').click();
            }else{
                $('.bjqs-markers').find('li').first().find('a').click();
            }
        });

        mc.on("swipeleft", function(ev) {
            if($('.bjqs-markers').children('.active-marker').prev().length > 0){
                $('.bjqs-markers').children('.active-marker').prev().find('a').click();
            }else{
                $('.bjqs-markers').find('li').last().find('a').click();
            }
        });
    }

    //Tabs menu sostenibilidad
    $('#menu-tabs li').on('click',function(){
        $('.contentTab').removeClass('tab-active');
        $('.MenuTabsItem').removeClass('active');
        $('#'+$(this).attr("data-tab")).addClass('tab-active');
        $(this).addClass('active');
    });

    $('#menu-tabs-second li').on('click',function(){
        $('.contentTab-second').removeClass('tab-active');
        $('.MenuTabsItem-second').removeClass('active');
        $('#'+$(this).attr("data-tab")).addClass('tab-active');
        $(this).addClass('active');
    }); 

    //filtros red de socios tecnologicos
    function applyStyle(selector, screen){
        var cNumero = 5;
        if (screen < 375){ cNumero = 1 }
        if (screen > 376 && screen < 480){ cNumero = 2 }
        if (screen > 481 && screen < 920){ cNumero = 3 }
        var cant = $("#filter-items").find(selector).length;
        $("#filter-items").find(selector).each(function (i, e) { 
            i++;
            if (i % cNumero == 0) { 
                $(e).css("border-right","none"); 
            } else { 
                $(e).css({
                    "border-right": "1px solid #dcd9d9",
                    "border-bottom": "1px solid #dcd9d9"
                }); 
            }
            var faltante =  cant % cNumero;
            var bottom = cant - faltante;
            if (i == bottom) {
                $(e).css("border-bottom","1px solid #dcd9d9"); 
            }
            if(i > bottom ){
                $(e).css("border-bottom","none"); 
            }
        });
    }

    if($('#filter').length > 0){
        $('#filter li').on('click',function(){
            $('#filter li').removeClass('MenuArticles-activo');
            $(this).addClass("MenuArticles-activo");
            var name = $(this).attr("data-value");
            console.log(name);
            if (name =="all") {
                $("#filter-items").find('a[data-item]').show();
                applyStyle('a[data-item]',screen.width);
            }else{
                $("#filter-items").find('a[data-item]').hide();
                $("#filter-items").find('a[data-item*="'+name+'"]').show();
                applyStyle('a[data-item*="'+name+'"]',screen.width);
            }
        }); 
    }

    //menú acordeon
    function animateAccordion($itemAccordion){
        $($itemAccordion).find('.accordionItemContent').animate({
            height: 'toggle'
        })
    }
    $('#accordion li .accordionItemTitle').on('click', function(){
        if($(this).parent().hasClass('open')){
            //cerramos el item accordioen que esta activo
            animateAccordion($(this).parent());
            $($(this).parent()).removeClass('open');
        }else{
            //cerramos el item accordioen que esta activo y abrimos el nuevo
            $open = $(this).parent().parent().find('li.open');
            animateAccordion($open);
            $($open).removeClass('open');
            animateAccordion($(this).parent());
            $($(this).parent()).addClass('open');
        }
        var _self = this;
        setTimeout(function(){
            $('html, body').animate({
                scrollTop: $(_self).offset().top - 100
            }, 500);
        }, 500)
    });

    //interaccion mapa hidroelectricas
    $('#mapa-marcadores .marcador').hover(function(){
        var hidroelectrica = $(this).attr('data-value');
        $(this).css("transform", "scale(1.2)");
        $(this).find('.tooltip-name').css({
            "top": "-75px",
            "width": "100px",
            "display": "inline-block",
            "opacity": "1"
        });
        $('#grid-hidroelectricas').find('div[data-value="'+hidroelectrica+'"]').css({
            "transform": "scale(1.1)",
            "box-shadow": "0px 10px 50px rgba(0, 0, 0, 0.5)"
        });         
    }, function(){
        var hidroelectrica = $(this).attr('data-value');
        $(this).css("transform", "scale(1)");
        $(this).find('.tooltip-name').css({
            "top": "0px",
            "opacity": "0",
            "display": "none"
        });
        $('#grid-hidroelectricas').find('div[data-value="'+hidroelectrica+'"]').css({
            "transform": "scale(1)",
            "box-shadow": "none"
        });     
    });

    $('#grid-hidroelectricas .hidroelectrica').hover(function(){
        var hidroelectrica = $(this).attr('data-value');
        $(this).css("transform", "scale(1.1)");
        $('#mapa-marcadores').find('div[data-value="'+hidroelectrica+'"] .tooltip-name').css({
            "top": "-75px",
            "width": "100px",
            "display": "inline-block",
            "opacity": "1",
            "transform": "scale(1.1)",
            "z-index": "999px"
        });         
    }, function(){
        var hidroelectrica = $(this).attr('data-value');
        $(this).css("transform", "scale(1)");
        $('#mapa-marcadores').find('div[data-value="'+hidroelectrica+'"] .tooltip-name').css({
            "top": "0px",
            "opacity": "0",
            "display": "none"
        });    
    });    
    
    $('.IconSearchInput').on('click', function(){    	
       $('#search').click();
   })

    $('#_3_keywords').val("");
    $('#_3_keywords').attr('autocomplete', 'off');
    
    //Inicio Funcionalida del Carrusel de videos
    if($('.slider_carousel_videos').length > 0){
        var window_Width = $(window).width(); //Obtiene el valor del ancho de la pagina
        var orientation = window_Width <= 995 ? 'horizontal' : 'vertical';  //Orietación de los slides del carrusel
        var cantSlides = window_Width <= 570 ? 2 : 3; //Cantidad de slides a mostrar en el carrusel
        if(window_Width > 995){
            $('.content_carousel').removeAttr('style');
        }
        window.sliderCarouselVideo =  $('.slider_carousel_videos').bxSlider({
            auto: false,
            touchEnabled: true,
            preventDefaultSwipeY: true,
            mode: orientation,
            nextSelector: '#slider-next',
            prevSelector: '#slider-prev',
            nextText: '',
            prevText: '',
            infiniteLoop: false,
            hideControlOnEnd: true,
            easing: 'easeOutElastic',
            slideWidth: 2000,
            minSlides: cantSlides,
            slideMargin: 10
        });

        var numSlides = $('.slide').length;    
        if(numSlides === 3 && cantSlides === 3){
            $('.controls-outside').hide();
        }
        if(cantSlides === 2){
            $('.controls-outside').show();
        }
    } 
    
    //Se cambia la classe de video activo
    $('.slider_carousel_videos .slide img').on('click',function(){
        $('.slider_carousel_videos .slide img').removeClass('active_video');        
        $(this).addClass('active_video');
    
        //Se recupera la url del video seleccionado a travez del atributo 'data-video' del elemento y se muestra
        var urlVideo = $(this).data("video");
        $('#videoprincipal').html('<iframe class="video" width="458" height="258" src="'+ urlVideo +'?rel=0&autoplay=1" frameborder="0"></iframe>');
    	// copiar metadato en pie de video
        var pieVideo = $(this).data("notapie");
    	$('#videoprincipal').append("<div class='pie-video'></div>");
    	$('#videoprincipal div.pie-video').html(pieVideo);
    });
    //Fin Funcionalida del Carrusel de videos

    //hover imagenes de sostenibilidad
    if($('#grid').length > 0){
        $('#grid .notice').hover(function(){
            imghover = $(this).find('.icon-img').attr('value-src-hover');
            $(this).find('.icon-img').attr('src', imghover);
        },function(){
            img = $(this).find('.icon-img').attr('value-src');
            $(this).find('.icon-img').attr('src', img);
        })
    }

    //animacion de trabajo en red
    if($('#hexagon-items').length > 0){
        $('#hexagon-items .hexagon-item').click(function(){
            var hexagon = $(this).attr('data-value');
            $('#red-container').find('.active').removeClass('active');
            $('#red-container').find('.red-descripion[data-value="'+ hexagon +'"]').addClass('active');
            enlace  = '#contenido';
            $('html, body').animate({
                    scrollTop: $(enlace).offset().top - 100
            }, 500);
        });
    }

    var cont = 1;
    var ini = ""

    //funcionalidad politica ambiental
    if ($('#card-politica').length > 0) {
        $('#card-politica .card-item-politica').click(function () {

           
            $('#card-politica').find('.active').removeClass('active');
            $(this).addClass('active');                        
            
            var tema = $(this).attr('data-value');
            $('#politica-subtema').find('.active').removeClass('active');
            $('#' + tema).addClass('active');

            if(ini === tema){
                if(cont % 2 !== 0){
                    $('#' + tema).removeClass('active');
                    $('#card-politica').find('.active').removeClass('active');
                    cont = 2;
                }else{
                    $('#' + tema).addClass('active');
                    $('#card-politica').find('.active').addClass('active');
                    cont = 1;
                }
            }

            ini = tema;            
        })
    }

    //funcionalidad politica ambiental mobile
     if($('#card-politica-mobile').length > 0){
        $('#card-politica-mobile .card-item-politica').click(function(){
            var tema = $(this).attr('data-value');
            $('#card-politica-mobile').find('.active').removeClass('active');
            $(this).addClass('active');

            $('#card-politica').find('.active').removeClass('active');
            $('#politica-subtema').find('.active').removeClass('active');
            $('#'+tema).addClass('active');
        })
     }    
    
    //Paginador Información Relevante
    if($('._current').length > 0){
        var year, elemns;
        if($('.lineYears').length > 0){
            $('.lineYears li').each(function(index){        
                //Se recupera el valor del año de cada tab
                year = $(this).data("year");
                //Se recuperan la cantidad de listas que tiene ese año
                elemns = ($('.listInfoRelevante-'+ year +' > ul').length - 1);
                //Se invoca la función que inicializa el paginador
                initPaginator(year, elemns);
            })
        //Paginador generico sin tabs
        }else{
            //Valor generico
            year = 'generic';
            //Se recuperan la cantidad de listas
            elemns = ($('.listInfoRelevante-'+ year +' > div').length - 1);
            initPaginator(year, elemns);
        }
    }

    //funcionalidad tabs
    if($('#menu-tab').length > 0){
        $('#menu-tab .tab').click(function(){
            var tab = $(this).attr('data-value');

            $('#menu-tab').find('.active').removeClass('active');
            $(this).addClass('active');

            $('#tab-content').find('.active').removeClass('active');
            $('#'+tab).addClass('active');

            if($('#menu-tab').attr("value-ancla") == "ancla"){
                var desktop = $('#menu-tab').attr("ancla-desktop")
                enlace  = '#ancla';
                if (desktop == 'true') {
                    $('html, body').animate({
                        scrollTop: $(enlace).offset().top - 100
                    }, 500);
                }else if(screen.width <= 480){
                    $('html, body').animate({
                        scrollTop: $(enlace).offset().top - 100
                    }, 500);
                }
            }
        })
    }

    //Slider Centrales Hidroeléctricas
    if($(".slides").length > 0){
        $(".slides").slidesjs({
        play: {
            active: true,
            // [boolean] Generate the play and stop buttons.
            // You cannot use your own buttons. Sorry.
            effect: "slide",
            // [string] Can be either "slide" or "fade".
            interval: 4000,
            // [number] Time spent on each slide in milliseconds.
            auto: true,
            // [boolean] Start playing the slideshow on load.
            swap: true,
            // [boolean] show/hide stop and play buttons
            pauseOnHover: false,
            // [boolean] pause a playing slideshow on hover
            restartDelay: 2500
            // [number] restart delay on inactive slideshow
            }
        });
    }

    // Pácticas con proveedores
    if($('#tab-practicas-proveedores').length > 0){
        tabToActive = getAnclaUrl();
        tab = '';
        if(tabToActive != undefined || tabToActive != null){
            if(tabToActive == "espacios-de-transferencia"){
                tab = 1;
            }else if(tabToActive == "programa-de-desarrollo-de-proveedores-y-contratistas"){
                tab = 2;
            }else if(tabToActive == "redes-de-colaboracion"){
                tab = 3;
            }else{
                tab = 4;
            }
            changeTabByAnchor(tab);
        }
    }

    function changeTabByAnchor(tab){
        $('#menu-tabs').find('.active').removeClass('active');
        $('#menu-tabs').find('li[data-tab="tab-' + tab + '"]').addClass('active');
        $('#tab-practicas-proveedores').find('.tab-active').removeClass('tab-active');
        $('#tab-practicas-proveedores').find('#tab-' + tab).addClass('tab-active');
    }

    $('.alturaminProveedores li a').on('click', function(){
        var tab = $(this).data('tab');
        $('.megaMenu ul').hide();
        setTimeout(function(){
           $('.megaMenu ul').show();
        }, 1500);        
        $('li[data-tab="tab-' + tab + '"]').trigger('click');
        location.href = '#tab-practicas-proveedores';   
        proveedores = true;        
    });


    //Sextante Ética empresarial
    $('.contenedoretica .circulogris .circuloazul div, .contenedoretica .acciones').on('click', function(){
        var tab = $(this).data('sextante');
        $('li[data-tab="' + tab + '"]').trigger('click');
        location.href = '#tabs-etica-empresarial';
    });
}

function getAnclaUrl(){
    var url = window.location.href;
    var str = url.split('#'); 
    return str[1];
}

function mostrar(){
    $(".infoCausas").click(function() {
        $(".subCausas").css("display","block");
        $(".infoCausas").css("background","#ddd");
        $(".infoControles").css("background","#fff");
        $(".infoTemas").css("background","#fff");
        $(".subControles").css("display","none");
        $(".subTemas").css("display","none");
    });
    $(".infoControles").click(function() {
        $(".subControles").css("display","block");
        $(".infoCausas").css("background","#fff");
        $(".infoControles").css("background","#ddd");
        $(".infoTemas").css("background","#fff");
        $(".subTemas").css("display","none");
        $(".subCausas").css("display","none");
    });
    $(".infoTemas").click(function() {
        $(".subTemas").css("display","block");
        $(".infoCausas").css("background","#fff");
        $(".infoControles").css("background","#fff");
        $(".infoTemas").css("background","#ddd");
        $(".subCausas").css("display","none");
        $(".subControles").css("display","none");
    });
}

function mostrar2(){
    $(".gestion").click(function() {
        for(var i = 1;i<=31;i++){
            var nombre1=".info"+i;
            $(nombre1).css("display","none");
        }
        var identificador = this.id;
        var nombre = ".info"+identificador;
        $(nombre).css("display","block");
        $(".subCausas").css("display","block");
        $(".infoCausas").css("background","#ddd");
        $(".infoControles").css("background","#fff");
        $(".infoTemas").css("background","#fff");
        $(".subControles").css("display","none");
        $(".subTemas").css("display","none");

        $("html, body").animate({scrollTop: $(nombre).offset().top}, 500);
    });
}

var initial = false;
// Función para inicializar paginador
function initPaginator(year, elemns){
    // Si la cantidad de listas de cada tab es menor a 5, se mostrara esa cantidad de opciones en el paginador 
    var displayPag = elemns >= 5 ? 5 : elemns;
    var color = year != 'generic' ? '#ff0000' : '#429dd1';
    
    $("#paginate-" + year).paginate({
        count: elemns,
        start: 1,
        display: displayPag,
        border: 'none',
        border_color: 'none',
        text_color: '#a7a7a7',
        background_color: '#fff',
        border_hover_color: 'none',
        text_hover_color: '#fff',
        background_hover_color: color,
        images: false,
        mouse: 'press',
        onChange: function (page) {
            $('._current', '.listInfoRelevante-' + year).removeClass('_current').hide();  
            $('#p' + page + '-' + year).addClass('_current').show();
        }  
    });

    // Si la cantidad de listas de cada tab es menor o igual a 5, se ocultan los controles
    if(elemns <= 5){
        $('#paginate-'+ year +' > .jPag-control-back').hide();
        $('#paginate-'+ year +' > .jPag-control-front').hide();
    }

    if(initial === false){
        $('.listInfoRelevante-' + year).addClass('tabShow');
        initial = true;
    }else{
        $('.listInfoRelevante-' + year).addClass('tabHide');
    }
}

//Funcionalidad para el cambio de Tabs de las internas que lo contengan
function changeTab(tab, cls){
var tabSelect = tab;
var classActive = cls;

   if($('#content_' + tabSelect).hasClass("tabShow")){
       return;
   }else{
       //Se busca el contenido visible del tab activo y se oculta
       var tabContentVisible = $('.contentTabs').find(".tabShow");
       var idTabContentVisible = tabContentVisible[0].id;
       $('#' + idTabContentVisible).removeClass("tabShow");
       $('#' + idTabContentVisible).addClass("tabHide");

       //Se desactiva el tab anterior y se activa el seleccioando
       var tabActive = $('.contentTabs').find("." + classActive);
       var idTabActive = tabActive[0].id;
       $('#' + idTabActive).removeClass(classActive);
       $('#' + tabSelect).addClass(classActive)

       //Se muestra el contenido del tab seleccionado
       $('#content_' + tabSelect).removeClass("tabHide")
       $('#content_' + tabSelect).addClass("tabShow")

       //Solo para 'Informes de gestión' se oculta y se muestra un preview
       if($(document).find(".previewEnabled").length > 0){
           var tabPreviewVisible = $(document).find(".previewEnabled");
           var idTabPreviewVisible = tabPreviewVisible[0].id;
           $('#' + idTabPreviewVisible).removeClass("previewEnabled").addClass("previewDisabled");
           $('#prev_' + tabSelect).removeClass("previewDisabled").addClass("previewEnabled"); 
       }
   }
}

function init() {
	events();
}

// $(window).resize(function() {
//    resizeSliderSostenibilidad();
// });

//window.onload = init;

$(document).ready(function(){
    events();
    $("#SliderGeneramosEnergia .bxsliderGeneramos a").mousedown(function(){ window.location.href=$(this).attr("href"); });
});

$(window).on("orientationchange",function(event){
    event.preventDefault();

    //resize slider videos
    if($('.slider_carousel_videos').length > 0){
        orientation = screen.width <= 995 ? 'horizontal' : 'vertical';
        cantSlides = screen.width <= 570 ? 2 : 3;
        window.sliderCarouselVideo.reloadSlider({
            auto: false,
            touchEnabled: true,
            preventDefaultSwipeY: true,
            mode: orientation,
            nextSelector: '#slider-next',
            prevSelector: '#slider-prev',
            infiniteLoop: false,
            hideControlOnEnd: true,
            easing: 'easeOutElastic',
            slideWidth: 2000,
            minSlides: cantSlides,
            slideMargin: 10
        });
    }
    salvattore.rescanMediaQueries();
});

/*slider generamos energía
 * Realizado 18-07-2018
 * */
    
    if(window.innerWidth>=1200){
    $('.bxsliderGeneramos').bxSlider({
        pager:false,
        captions:true,
        slideWidth: 352,
        prevText: '<img src="/" class="prev-slider" alt="button-prev-slide" title="button-prev-slide"/>',
        nextText: '<img src="/" class="next-slider" alt="button-next-slide" title="button-next-slide"/>',
        minSlides: 1,
        maxSlides: 3,        
        moveSlides:1
    });  
    }
    else if((window.innerWidth>=900) && (window.innerWidth<1200)){
    $('.bxsliderGeneramos').bxSlider({
        pager:false,
        captions:true,
        slideWidth: 250,
        prevText: '<img src="/" class="prev-slider" alt="button-prev-slide" title="button-prev-slide"/>',
        nextText: '<img src="/" class="next-slider" alt="button-next-slide" title="button-next-slide"/>',
        minSlides: 1,
        maxSlides: 3,        
        moveSlides:1      
    }); 
    }   
    else if((window.innerWidth>=700) && (window.innerWidth<900)){
    $('.bxsliderGeneramos').bxSlider({
        pager:false,
        captions:true,
        slideWidth: 410,
        minSlides: 1,
        maxSlides: 2,        
        moveSlides:1        
    }); 
    }   
    else if((window.innerWidth>=450) && (window.innerWidth<700)){
    $('.bxsliderGeneramos').bxSlider({
        pager:false,
        captions:true,
        slideWidth: 350,
        minSlides: 1,
        maxSlides: 2,        
        moveSlides:1        
    }); 
    }   
    else{
         $('.bxsliderGeneramos').bxSlider({
        pager:false,
        captions:true,
        slideWidth: 250,
        minSlides: 1,
        maxSlides: 2,        
        moveSlides:1        
    }); 
    }
    
    /*Ancla y apertura de acordeón de enlaces en la interna generamos energía desde el home*/
if(document.referrer.substring(0, 35) == "https://www.isagen.com.co/SitioWeb/") {

	if(window.location.hash == "#central-hidroelectrica-sogamoso"){
        $(".mapa-hidroelectricas .hidroSogamoso").trigger('click');
	}
	else if (window.location.hash == "#central-hidroelectrica-miel-i"){
		$(".mapa-hidroelectricas .hidroMiel").trigger('click');
	}
	else if (window.location.hash == "#central-termica-termocentro"){
		$(".mapa-hidroelectricas .termicaTermo").trigger('click');
	}
	else if (window.location.hash == "#central-hidroelectrica-jaguas"){
		$(".mapa-hidroelectricas .hidroJaguas").trigger('click');

	}
	else if (window.location.hash == "#central-hidroelectrica-rio-amoya-la-esperanza"){
		$(".mapa-hidroelectricas .hidroAmoya, .mapa .hidroAmoya").trigger('click');
	}
	else if (window.location.hash == "#central-hidroelectrica-calderas"){
		 $(".mapa-hidroelectricas .hidroCalderas, .mapa .hidroCalderas").trigger('click');
	}
}

else if (document.referrer.substring(0, 38) == "https://www.isagen.com.co/SitioWeb/en/") {

	if(window.location.hash == "#sogamoso-hydroelectric-power-plant"){
        $(".mapa-hidroelectricas .hidroSogamoso").trigger('click');
	}
	else if (window.location.hash == "#miel-i-hydroelectric-power-plant"){
		$(".mapa-hidroelectricas .hidroMiel").trigger('click');
	}
	else if (window.location.hash == "#termocentro-thermal-power-plant"){
		$(".mapa-hidroelectricas .termicaTermo").trigger('click');
	}
	else if (window.location.hash == "#jaguas-hydroelectric-power-plant"){
		$(".mapa-hidroelectricas .hidroJaguas").trigger('click');
	}
	else if (window.location.hash == "#rio-amoya-la-esperanza-hydroelectric-power-plant"){
		$(".mapa-hidroelectricas .hidroAmoya, .mapa .hidroAmoya").trigger('click');
	}
	else if (window.location.hash == "#calderas-hydroelectric-power-plant"){
		 $(".mapa-hidroelectricas .hidroCalderas, .mapa .hidroCalderas").trigger('click');
	}
}

/*Fin generamos energía*/

/*Asigna la url apropiada al background-image en el ambiente de pruebas, de esta forma la imagen que
 *es tomada desde documents de liferay es visible en ambos ambientes*/
var pathNameSite = window.location.pathname.substring(0, 9);

if(pathNameSite != "/SitioWeb"){
	/*
	$(".fontEmpresarialSection").css("background-image", "url(/documents/21223/40718/fondo_sostenibilidad.jpg)");
	$(".fontEmpresarialSection.opcion2").css("background-image", "url(/documents/21223/40718/sostenibilidad.jpg)");
	$("section.sectionHeader.contactanos").css("background-image", "url(/documents/21223/40718/banner_contactanos.jpg)");
	$("section.sectionHeader.contact-us").css("background-image", "url(/documents/21223/40718/banner_contactanos.jpg)");
	$("section.sectionHeader.sostenibilidad, section.sectionHeader.practicas, " +
			"section.sectionHeader.gestion-integral-de-riesgos, " +
			"section.sectionHeader.gestion-ambiental, " +
			"section.sectionHeader.gestion-del-agua, section.sectionHeader.cambio-climatico, " +
			"section.sectionHeader.recursos-naturales-y-biodiversidad, " +
			"section.sectionHeader.etica-empresarial, " +
			"section.sectionHeader.relaciones-con-grupos-de-interes, " +
			"section.sectionHeader.gestion-social-en-las-regiones, " +
			"section.sectionHeader.derechos-humanos, " +
			"section.sectionHeader.desarrollo-de-los-trabajadores, " +
			"section.sectionHeader.seguridad-y-salud-en-el-trabajo-seguridad-de-personas-e-infraestructura-y-ambiente").css("background-image", "url(/documents/21223/40718/fondo_sostenibilidad.jpg)");
	$("section.sectionHeader.gobierno-corporativo, section.sectionHeader.resultados-financieros, " +
			  "section.sectionHeader.emisiones-vigentes, section.sectionHeader.informacion-relevante, " +
			  "section.sectionHeader.informacion-financiera, " +
			  "section.sectionHeader.asamblea-general-de-accionistas, " +
			  "section.sectionHeader.servicios-en-linea, section.sectionHeader.canales-de-contacto, " +
			  "section.sectionHeader.oferta-de-compra-de-acciones").css("background-image", "url(/documents/21223/253847/banner_Inversionistas.jpg)");
	if ($(window).width() <= 768) {  
		$("section.sectionHeader.contactanos").css("background-image", "url(/documents/21223/40718/banner_contactanos_mobile.jpg)");
		$("section.sectionHeader.gobierno-corporativo, section.sectionHeader.resultados-financieros, " +
		  "section.sectionHeader.emisiones-vigentes, section.sectionHeader.informacion-relevante, " +
		  "section.sectionHeader.informacion-financiera, " +
		  "section.sectionHeader.asamblea-general-de-accionistas, " +
		  "section.sectionHeader.servicios-en-linea, section.sectionHeader.canales-de-contacto, " +
		  "section.sectionHeader.oferta-de-compra-de-acciones").css("background-image", "url(/documents/21223/253847/banner_Inversionistas_mobile.jpg)");
    }
    */
}

/*Fin manejo de los banner del header dependiendo del ambiente */
