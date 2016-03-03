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
  $("#item1").click(function(){
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
});