// JavaScript Document
$(function(){
					
				$('#goDown').click(function(event) {
				// dette gør at det ikke er default
				event.preventDefault();
				// højden af doc.
				var n = $('#trailer').offset().top;
				$('html, body').animate({ scrollTop: n }, 3000);		
			     });
	
$("#readmore").click(function(){
	$("#ekstra").toggle(function(){
		if($("#ekstra").is(":visible")){
			$("#readmore").text("Læs mindre..");
		}else{
			$("#readmore").text("Læs mere...");
		}
	});
});
	});
	
/*						$(function(){	
				var farve_1 = "#000";
				var farve_2 = "#666";
				var farve_3 = "#000";
				 


			
			
				$(window).on('scroll', function(){
					if($(document).scrollTop() < $('main:nth-child(2)').offset().top){
						$('body').css({'background': '#000'});
					}
					if($(document).scrollTop() >= $('main:nth-child(2)').offset().top){
						$('body').css({'background': farve_1});
					}
					if($(document).scrollTop() >= $('main:nth-child(3)').offset().top){
						$('body').css({'background': farve_2});
					}
					if($(document).scrollTop() >= $('main:nth-last-child').offset().top){
						$('body').css({'background': farve_3});
					}
				});*/
	
	
var index=1;
var nyFoto;
	
function frem(){
if(index<9){
index++;
}
else{
index=1;
}
nyFoto="stills/en"+index+".jpg";
document.getElementById("placeholder").setAttribute("src", nyFoto);
}

function tilbage(){
		if(index>1){
			index--;
		}
		else{
			index=9;
	}

		
													
	$('#galleri div:nth-child(2)').fadeOut(function(){
nyFoto="stills/en"+index+".jpg";
document.getElementById("placeholder").setAttribute("src", nyFoto);
	});
	$('#galleri div:nth-child(2)').fadeIn();	
	}
	