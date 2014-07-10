function count(){
  var txtVal = $('textarea').val();
  var words = txtVal.trim().replace(/\s+/gi, ' ').split(' ').length;
  var chars = txtVal.length;
  if(chars===0){words=0;}
  $('#counter').html('<br>'+words+' words and '+ chars +' characters');
}
count();

$('textarea').on('keyup propertychange paste', function(){ 
    count();
});

