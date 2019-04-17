$(document).ready(function() {
	var contador = 0;

	//bagde e modal aqui
	$('.bagde').html(contador);

	$("#btnComprar").on("click", function(){
	  	$(".mask").addClass("active");
	  	contador = contador + 1;
		$('.bagde').html(contador);
	});

	function closeModal(){
	  $(".mask").removeClass("active");
	}


	$(".close, .mask").on("click", function(){
	  closeModal();
	});

	$(document).keyup(function(e) {
	  if (e.keyCode == 27) {
	    closeModal();
	  }
	})


	//Autocomplete aqui
	var produtos = [
	    "Super Mario",
	    "X-men",
	    "Bob Esponja",
	    "Os Vingadores"
	  ];
	  $("#produtos" ).autocomplete({
	    source: produtos
	  });
});