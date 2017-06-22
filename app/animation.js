'use strict';

/**
 * Created by David on 10/02/2017.
 */
function animation(element, animation){
    element = $(element);
    element.removeClass('invisible');
    element.addClass('animated ' + animation);
    //wait for animation to finish before removing classes
    window.setTimeout( function(){
        element.removeClass('animated ' + animation);
    }, 2000);
}
