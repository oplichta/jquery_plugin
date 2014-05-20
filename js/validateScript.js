var i,j,k;
$('.btn').attr("disabled", true);
$('#exampleInputText1').keyup(function (){

	$('#exampleInputText1').myProValidation("textExpression",{
		// "regex": "^[A-Z]\\w+",
		"correct": function (that) {
			i=1;
			$(that).parent().addClass("has-success");
			$(that).parent().removeClass("has-error");
			if(i+j+k === 3){
				$('.btn').attr("disabled", false);
				$('.btn').addClass("btn-success");
				$('.btn').removeClass("btn-danger");
			} else {
				$('.btn').attr("disabled", true);
				$('.btn').addClass("btn-danger");
				$('.btn').removeClass("btn-success");
			}
		},
		"uncorrect": function (that){
			i=0;
			$(that).parent().addClass("has-error");
			if(i+j+k === 3){
				$('.btn').attr("disabled", false);
				$('.btn').addClass("btn-success");
				$('.btn').removeClass("btn-danger");
			} else {
				$('.btn').attr("disabled", true);
				$('.btn').addClass("btn-danger");
				$('.btn').removeClass("btn-success");
			}
		}
	});

});
