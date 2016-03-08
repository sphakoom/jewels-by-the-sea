$(document).ready(function() {
  displayProducts();
});

function displayProducts() {
  $.getJSON("products/estatevintage.json", function(data) { 
    var i = 0;  
    $.each(data.result, function(){    
      var name =  this['name'];
      var thumb = this['thumb'];

      $("#productGrid").append(
        "<div class='column'><div id='item'" + i 
        + " class='ui card'><div class='image'><img src='"+ thumb + "'>"
        + "</div><div class='content'><a class='header'>" + name 
        + "</a></div></div></div>");
      
    });
  });
};

/*
  var testArray = ["test1","test2","test3","test4"];
  var vPool = "";

  jQuery.each(testArray, function(i, val) {
    vPool += val + "<br /> is the best <br />";
  });

  //We add vPool HTML content to #myDIV
  $('#myDIV').html(vPool);
});


          <!-- Row 1 -->
          <div class="column">
            <div id="item1" class="ui card">
              <div class="image">
                <img src="images/estatevintage/1-thumb.png">
              </div>
              <div class="content">
                <a class="header">ART NOUVEAU STYLE CUFF</a>
              </div>
            </div>
          </div>

          <div class="column">
            <div id="item2" class="ui card">
              <div class="image">
                <img src="images/estatevintage/2-thumb.png">
              </div>
              <div class="content">
                <a class="header">ONYX & MARCASITE RING</a>
              </div>
            </div>
          </div>

          <div class="column">
            <div id="item3" class="ui card">
              <div class="image">
                <img src="images/estatevintage/3-thumb.png">
              </div>
              <div class="content">
                <a class="header">HOBE GOLD-TONE BRACELET</a>
              </div>
            </div>
          </div>

          <div class="column">
            <div id="item4" class="ui card">
              <div class="image">
                <img src="images/estatevintage/4-thumb.png">
              </div>
              <div class="content">
                <a class="header">LAVALIER CHAIN</a>
              </div>
            </div>
          </div>

          <div class="column">
            <div id="item5" class="ui card">
              <div class="image">
                <img src="images/estatevintage/5-thumb.png">
              </div>
              <div class="content">
                <a class="header">SIGNED COPPER NECKLACE</a>
              </div>
            </div>
          </div>

          <div class="column">
            <div id="item6" class="ui card">
              <div class="image">
                <img src="images/estatevintage/6-thumb.png">
              </div>
              <div class="content">
                <a class="header">SAPPHIRE RING</a>
              </div>
            </div>
          </div>

          <div class="column">
            <div id="item7" class="ui card">
              <div class="image">
                <img src="images/estatevintage/7-thumb.png">
              </div>
              <div class="content">
                <a class="header">SHORT NECKLACE</a>
              </div>
            </div>
          </div>

          <div class="column">
            <div id="item8" class="ui card">
              <div class="image">
                <img src="images/estatevintage/8-thumb.png">
              </div>
              <div class="content">
                <a class="header">SILVER EARRINGS</a>
              </div>
            </div>
          </div>

          <div class="column">
            <div id="item9" class="ui card">
              <div class="image">
                <img src="images/estatevintage/9-thumb.png">
              </div>
              <div class="content">
                <a class="header">PAINTED BUTTONS</a>
              </div>
            </div>
          </div>
          */