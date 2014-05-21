(function($) {
 "use strict";
	var methods = {
		regexp: function(options){
		//	console.log("regexp");

			return this.each(function (){
				var isCorrect = false;
				var val = $(this).val();
				var patt;

				if(options.pattern){
					patt = new RegExp(options.pattern);
					console.log("only pattern");
					}
					if(patt.test(val)){
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
			return methods.regexp.call(this, settings)
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
