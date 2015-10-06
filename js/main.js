// Add event click to button

$('button').on('click', function(event){
  
  //
  var btn = $(event.target);

// Collapse paragraph sibling of button

  btn.siblings().addClass('collapsePar');

  
 
  btn.parent().siblings().find('normalPar').removeClass('normalPar').addClass('collapsePar');



});