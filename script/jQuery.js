// JavaScript Document
$("#slideshow > div:first").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .animate(2000)
    .next()
    .animate(2000)
    .end()
    .appendTo('#slideshow');
},  3000);
$(document).ready(function(){
    $("#side1").click(function(){
		$("#slideshow").show();
		$(".col-sm-2").show();
    });
});
$(document).ready(function(){
    $("#side2").click(function(){
		$("#slideshow").hide();
		$(".col-sm-2").hide();
        $("#div1").load("sidene/2.html");
    });
});
$(document).ready(function(){
    $("#side3").click(function(){
		$("#slideshow").hide();
		$(".col-sm-2").show();
        $("#div1").load("sidene/3.html");
    });
});
$(document).ready(function(){
    $("#side4").click(function(){
		$("#slideshow").show();
		$(".col-sm-2").show();
        $("#div1").load("sidene/4.html");
    });
});
$(document).ready(function(){
    $("#side5").click(function(){
		$("#slideshow").show();
		$(".col-sm-2").show();
        $("#div1").load("sidene/5.html");
    });
});

$(document).ready(function(){
$(".img-rounded").hover(function(){
$(this).stop().animate({"opacity": "0.85"});
}, function(){
$(this).stop().animate({"opacity": "1.0"});
});

});

$(document).ready(function(){
    $(".skog").click(function(){
		$("#slideshow").hide();
		$(".col-sm-2").show();
        $("#div1").load("sidene/skog.html");
    });
});

$(document).ready(function(){
    $(".fjell").click(function(){
		$("#slideshow").hide();
		$(".col-sm-2").show();
        $("#div1").load("sidene/fjell.html");
    });
});
