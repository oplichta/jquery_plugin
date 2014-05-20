(function ( $ ) {
 "use strict";
    $.fn.validate = function( that,options ) {
 		var value = $(that).val();
      	var err = false;
      	// var errType = {};
   
      	// if(value.length === 0){
       //  	errType.empty = true;
      	// }
        var settings = $.extend({
          "size":
          {
          	"min":2,
          	"max":20
          }
        }, options );

    	if(options.size){
        if(options.size.min){
          if(value.length < options.size.min){
            err = true;
            // if(!errType.size){ errType.size = {}; }
            // errType.size.min = true;
          }
        }
        if(options.size.max){
          if(value.length > options.size.max){
            
            err = true;
            // if(!errType.size){ errType.size = {}; }
            // errType.size.max = true;
          }
        }
      }
        return valid.text(that, settings);
    };
}( jQuery ));