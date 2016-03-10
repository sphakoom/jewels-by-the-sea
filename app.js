'use strict';

$(function() {
  $('#show-sidebar').click(function() {
    $('.menu.sidebar').sidebar('toggle');
  });

  $('#hide-sidebar').click(function() {
    $('.menu.sidebar').sidebar('toggle');
  });
});


$(document).ready(function(){
	if( window.innerWidth <= 660 ) {
		console.log('mobile');
		$('#productGrid').addClass('ui two column grid center aligned');
	}
	else {
		console.log('desktop');
		$('#productGrid').addClass('ui three column grid center aligned');
	}

  $("#item1").click(function(){
    console.log('here');
    $('.ui.modal.item1').modal('show');
  });

  $("#item2").click(function(){
    $('.ui.modal.item2').modal('show');
  });

  $("#item3").click(function(){
    $('.ui.modal.item3').modal('show');
  });

  $("#item4").click(function(){
    $('.ui.modal.item4').modal('show');
  });

  $("#item5").click(function(){
    $('.ui.modal.item5').modal('show');
  });

  $("#item6").click(function(){
    $('.ui.modal.item6').modal('show');
  });

  $("#item7").click(function(){
    $('.ui.modal.item7').modal('show');
  });

  $("#item8").click(function(){
    $('.ui.modal.item8').modal('show');
  });

  $("#item9").click(function(){
    $('.ui.modal.item9').modal('show');
  });
});

$(window).on('resize', '#productGrid', function(){
  var shrinkOn = 660;
  var $grid = $('#productGrid');
  var width = window.innerWidth || document.documentElement.clientWidth;
  console.log('resize!');

  // Mobile
  if( width < shrinkOn ) {
    console.log('resized to mobile');
    if($grid.is('.ui', '.three', '.column', '.grid', '.center', '.aligned')) {
      console.log('has!');
      $grid.removeClass('ui three column grid center aligned');
      console.log('removed class');
      $grid.addClass('ui two column grid center aligned');
      console.log('added class')
    }
  }
  // Desktop
  else {
    console.log('resized to desktop');
    if($grid.is('.ui', '.two', '.column', '.grid', '.center', '.aligned')) {
      console.log('has!');
      $grid.removeClass('ui two column grid center aligned');
      console.log('removed class');
      $grid.addClass('ui three column grid center aligned');
      console.log('added class')
    }
  }
});

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});



});