// JavaScript Document

// SLIDESHOW
$("#slideshow > div:first").hide();
setInterval(function() {
  $('#slideshow > div:first')
    .animate(2000)
    .next()
    .animate(2000)
    .end()
    .appendTo('#slideshow');
},  3000);
// HOVEDSIDE
$(document).ready(function(){
    $("#side1").click(function(){
		$("#slideshow").show();
		$(".col-sm-2").show();
    });
});
// SIDE2
$(document).ready(function(){
	// Utfører gitte handlinger ved klikk på element med ID: "side2".
    $("#side2").click(function(){
		// Fjerner klassen "active" fra elementer med li(ste)-tag.
		$("li").removeClass("active");
		// Legger til klassen "active" til element med ID: "side2".
		$("#side2").addClass("active");
		// Gjemmer dropdown-menyen ved menyvalg.
		$("#myNavbar").removeClass("in");
		// Gjemmer slideshow
		$("#slideshow").hide();
		// Gjemmer sidekollonnen.
		$(".col-sm-2").hide();
		// Laster inn side "2". 
        $("#div1").load("sidene/2.html");
    });
});
// SIDE3
$(document).ready(function(){
    $("#side3").click(function(){
		$("li").removeClass("active");
		$("#side3").addClass("active");
		$("#myNavbar").removeClass("in");
		$("#slideshow").hide();
		$(".col-sm-2").show();
        $("#div1").load("sidene/3.html");
    });
});
// SIDE4
$(document).ready(function(){
    $("#side4").click(function(){
		$("li").removeClass("active");
		$("#side4").addClass("active");
		$("#myNavbar").removeClass("in");
		$("#slideshow").show();
		$(".col-sm-2").show();
        $("#div1").load("sidene/4.html");
    });
});
// SIDE5
$(document).ready(function(){
    $("#side5").click(function(){
		$("li").removeClass("active");
		$("#side5").addClass("active");
		$("#myNavbar").removeClass("in");
		$("#slideshow").show();
		$(".col-sm-2").show();
        $("#div1").load("sidene/5.html");
    });
});
// BILDEEFFEKT
$(document).ready(function(){
	$(".img-rounded").hover(function(){
		$(this).stop().animate({"opacity": "0.85"});
		}, function(){
		$(this).stop().animate({"opacity": "1.0"});
	});
});
// SIDE-SKOG
$(document).ready(function(){
    $(".skog").click(function(){
		$("li").removeClass("active");
		$("#side3").addClass("active");
		$("#slideshow").hide();
		$(".col-sm-2").show();
        $("#div1").load("sidene/skog.html");
    });
});
// SIDE-FJELL
$(document).ready(function(){
    $(".fjell").click(function(){
		$("li").removeClass("active");
		$("#side3").addClass("active");
		$("#slideshow").hide();
		$(".col-sm-2").show();
        $("#div1").load("sidene/fjell.html");
    });
});
