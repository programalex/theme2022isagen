/**
 * Función para mezclar elementos del DOM. Se utiliza principalmente para mezclar las fichas de sostenibilidad
 * Tomado de: https://css-tricks.com/snippets/jquery/shuffle-dom-elements/
 * 
 * @author Antonio Dragone
 * @version 20161110
 * 
 */

(function($){
 
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };
})(jQuery);

$( document ).ready(function() {
    if($('.empresarialSection div.cajon').length > 0){
        $('.empresarialSection div.cajon div').removeClass('left');
        $('.empresarialSection div.cajon div').removeClass('right');
        
        $('.empresarialSection div.cajon.aleatorio').shuffle();
        
        $('.empresarialSection div.cajon.aleatorio:first').insertBefore('.empresarialSection div.cajon:first');
        
        $('.empresarialSection div.cajon:nth-child(3n+1) div.contenidoSlider').addClass('left');
        $('.empresarialSection div.cajon:nth-child(3n) div.contenidoSlider').addClass('right');    
    }	
});