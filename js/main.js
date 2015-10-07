// Add event click to button

$('button').on('click', function(event) {
  
  var btn = $(event.target);

// Add class to paragraph

  btn.siblings().addClass('collapsePara');

// Target siblings of button, remove class and collapse
 
  btn.parent().siblings().find('normalPara').removeClass('normalPara').addClass('collapsePara');

});