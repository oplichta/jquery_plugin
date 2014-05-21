(function($) {
 "use strict";
	var methods = {
		regexp: function(options){
		//	console.log("regexp");

			return this.each(function (){
				var isCorrect = false;
				var value = $(this).val();
				var patt;

				if(options.pattern){
					patt = new RegExp(options.pattern);
					console.log("only pattern");
					}
					if(patt.test(value)){
						isCorrect = true;
					}

				if(isCorrect){
					options.correct(this);
				} else {
					options.uncorrect(this);
				}
			});
		},


		textExpression : function(options) {
				var isCorrect = false;
				var settings = $.extend({
					"pattern": "[A-Za-z]\\w+"}, options);
			return methods.regexp.call(this, settings);

		},
		emailExpression: function(options) {
			//console.log("emailExpression: " + options);
			var isCorrect = false;
			var settings = $.extend({
				"pattern": "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\." +
				"[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@" +
		        "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+" +
		        "[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"}, options);

			return methods.regexp.call(this, settings);
		},

		passwordExpression: function(options){

      return this.each(function () {
        var isCorrect = true;
        var value = $(this).val();
        var patt;
        var min=5;
        var max=10;

        if(options.min){
          if(value.length<min){
            isCorrect = false;
          }
        }
        if(options.max){
          if(max<value.length){
            isCorrect = false;
          }
        }
        if(options.small){
          patt = new RegExp("[a-z]");
          if(!patt.test(value)){
            isCorrect = false;
          }
        }
        if(options.big){
          patt = new RegExp("[A-Z]");
          if(!patt.test(value)){
            isCorrect = false;
          }
        }
        if(options.dig){
          patt = new RegExp("\\d");
          if(!patt.test(value)){
            isCorrect = false;
          }
        }
        if(options.special){
          patt = new RegExp("[\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\_\\+\\-\\=]");
          if(!pat.test(value)){
            isCorrect = false;
          }
        }

        if(isCorrect){
          options.correct(this);
        } else {
          options.uncorrect(this);
        }
      });
		}
	};

	$.fn.validate = function(method) {

		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(
					arguments, 1));
		}
		 else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		}
		else {
			$.error('Method ' + method + ' does not exist on jQuery.myProValidation');
		}
	};
})(jQuery);
