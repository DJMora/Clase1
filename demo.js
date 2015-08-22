function drag(event){
  event.dataTransfer.setData('text',event.target.id);
}

function allow(event){
  event.preventDefault();
}

function drop(event){
  event.preventDefault();
  var gol = event.dataTransfer.getData('text');
  alert(gol);
}
