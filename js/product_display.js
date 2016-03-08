$(document).ready(function() {
  displayProducts();
});

function displayProducts() {
  
  var url = window.location.pathname;
  var category = "products"+ url.substr(url.lastIndexOf('/')).replace("html", "json");

  $.getJSON(category, function(data) {  
    var i = 1;
    $.each(data, function(){    
      var name =  this['name'];
      var thumb = this['thumb'];
      var img = this['img'];
      var desc = this['description'];
      var price = this['price'];

      $("#productGrid").append(
        "<div class='column'><div id='item" + i 
        + "' class='ui card'><div class='image'><img src='"+ thumb + "'>"
        + "</div><div class='content'><a class='header'>" + name 
        + "</a></div></div></div>");
      
      $("#productModals").append(
        "<div class='ui modal item" + i
        + "'> <i class='close icon'></i>"
        + "<div class='content'>"
        + "<img class='ui centered image' src='"+ img +"'>"
        + "<div class='item-desc'>"
        + "<p class='item-title'>" + name + "</p>"
        + "<p class='item-subtitle'>" + description + "</p>"
        + "<p class='item-price'>" + price + "</p>"
        + "<button class='ui blue button'>Inquire</button></div></div></div>"
        );

      i++;
    });
  })
  .error(function(data){
    console.log('Error!');
  });
};