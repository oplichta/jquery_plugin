var textErr,emailErr,passwordErr;
$('.btn').attr("disabled", true);
function btnBlock(textErr,emailErr,passwordErr){
	if(textErr+emailErr+passwordErr === 3){
		$('.btn').attr("disabled", false);
		$('.btn').removeClass("btn-block");
		$('.btn').removeClass("btn-danger");
		$('.btn').addClass("btn-success");
	} else {
		$('.btn').attr("disabled", true);
		$('.btn').addClass("btn-danger");
	}
}
$('#textInput').keyup(function (){
	$('#textInput').validate("textExpression",{
		"pattern": "[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]",
		"minValue": 5,
		"maxValue": 10,
		// "regex": "^[A-Z]\\w+",
		"correct": function (that) {
			textErr=1;
			$(that).parent().removeClass("has-error");
			btnBlock(textErr,emailErr,passwordErr);
		},
		"uncorrect": function (that){
			textErr=0;
			$(that).parent().addClass("has-error");
			btnBlock(textErr,emailErr,passwordErr);
		}
	});

});

$('#emailInput').keyup(function (){
	$('#emailInput').validate("emailExpression",{
				"correct": function (that) {
					emailErr=1;
			$(that).parent().removeClass("has-error");
			btnBlock(textErr,emailErr,passwordErr);

		},
		"uncorrect": function (that){
			emailErr=0;
			$(that).parent().addClass("has-error");
			btnBlock(textErr,emailErr,passwordErr);
		}
	});
});

$('#passwordInput').keyup(function (){
	$('#passwordInput').validate("passwordExpression",{
		"small": true,
		"big": true,
		"dig": true,
		"min": true,
		"minValue": 10,
		"max": true,
		"maxValue":10,
		"correct": function (that) {
			passwordErr=1;
			$(that).parent().removeClass("has-error");
			btnBlock(textErr,emailErr,passwordErr);
		},
		"uncorrect": function (that){
			passwordErr=0;
			$(that).parent().addClass("has-error");
			btnBlock(textErr,emailErr,passwordErr);
		}
	});
});
