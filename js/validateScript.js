// $( "#textInput" ).validate({
//             "size": { "min": 6, "max": 64 }           
// });
 var callback = function ( err ) {
    if(err){
      if(err.empty) return;
      $(this).parent().addClass("has-error");
    }
    else{
      $(this).parent().removeClass("has-error");
      $(this).parent().addClass("has-success");
    }
  };
// function( err ){
//       if(err){
//         $("#submitBtn").attr("disabled", "disabled");
//       }
//       else{
//         $("#submitBtn").removeAttr("disabled");
//       }
//     });