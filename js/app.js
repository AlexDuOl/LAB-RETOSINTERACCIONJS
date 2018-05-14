var container = document.getElementsByClassName("container")[0];
var list = document.getElementById("list");
list.addEventListener("click", function(){
  container.className = "square";
  
  var boton = document.createElement('button');
  boton.type = "button";
  container.appendChild(boton);
  boton.appendChild(document.createTextNode("Guardar"));

  var botonX = document.createElement('button');
  botonX.type = "button";
  botonX.className = "botonCancel";
  container.appendChild(botonX);
  botonX.innerHTML = "&times;";
})
