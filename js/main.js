// Add event click to button

$('button').on('click', function(event) {
  
  //
  var btn = $(event.target);

// Collapse paragraph sibling of button 
// Add class to paragraph

  btn.siblings().addClass('collapsePara');


// Target siblings of button & remove and close 

 
  btn.parent().siblings().find('normalPara').removeClass('normalPara').addClass('collapsePara');

});


