function init(){
  var button = document.getElementById('entrybutton');
  var input = document.getElementById('entryinput')
    
  entrybutton.addEventListener('click', function() {
    alert('John Deifel: ' + input.value);
  })
  
  }
  
  
  window.addEventListener('load', init);