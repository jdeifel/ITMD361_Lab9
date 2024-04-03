function init(){
  var button = document.getElementById('entrybutton');
  var input = document.getElementById('entryinput');
  var output = document.getElementById('textoutput');
    
  entrybutton.addEventListener('click', function() {
    alert('John Deifel: ' + input.value);
    output.innerHTML = input.value;
  })
  
  }
  
  
  window.addEventListener('load', init);