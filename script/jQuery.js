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
    });
});
$(document).ready(function(){
    $("#side2").click(function(){
		$("#slideshow").hide();
        $("#div1").load("sidene/2.html");
    });
});
$(document).ready(function(){
    $("#side3").click(function(){
		$("#slideshow").hide();
        $("#div1").load("sidene/3.html");
    });
});
$(document).ready(function(){
    $("#side4").click(function(){
		$("#slideshow").show();
        $("#div1").load("sidene/4.html");
    });
});
$(document).ready(function(){
    $("#side5").click(function(){
		$("#slideshow").show();
        $("#div1").load("sidene/5.html");
    });
});