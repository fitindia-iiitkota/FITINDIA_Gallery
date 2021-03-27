"use strict";

jQuery(document).ready(function($){



	/************** Gallery Hover Effect *********************/
	$(".overlay").hide();

	$('.gallery-item').hover(
	  function() {
	    $(this).find('.overlay').addClass('animated fadeIn').show();
	  },
	  function() {
	    $(this).find('.overlay').removeClass('animated fadeIn').hide();
	  }
	);


	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


	$("a.menu-toggle-btn").click(function() {
	  $(".responsive_menu").stop(true,true).slideToggle();
	  return false;
	});
 
    $(".responsive_menu a").click(function(){
		$('.responsive_menu').hide();
	});

});


function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

function initialize() {
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(16.8496189,96.1288854)
    };
    var map = new google.maps.Map(document.getElementById('templatemo_map'),  mapOptions);
}


/*----------------- Previous Next button ---------------------- */
$(window).load(function(){
$(document).ready(function(){				   
    $(".divs div.content").each(function(e) {
        if (e != 0)
            $(this).hide();
    });
    
    $("#next").click(function(){
			loadScript();
        if ($(".divs div.content:visible").next().length != 0)
            $(".divs div.content:visible").next().addClass("animated fadeInDown").show().prev().hide() ;
        else {
            $(".divs div.content:visible").hide();
            $(".divs div.content:first").addClass("animated fadeInDown").show() ;
			
        }
        return false;
    });

    $("#prev").click(function(){
				loadScript();				  
        if ($(".divs div.content:visible").prev().length != 0)
            $(".divs div.content:visible").prev().addClass("animated fadeInDown").show().next().hide();
        else {
            $(".divs div.content:visible").hide();
            $(".divs div.content:last").addClass("animated fadeInDown").show();
			
        }
        return false;
    });
});

});
