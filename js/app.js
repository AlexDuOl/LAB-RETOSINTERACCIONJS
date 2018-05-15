var container = document.getElementsByClassName("container")[0];
var addlist = document.getElementById("addlist");
var list = document.getElementById("list");

addlist.addEventListener("click", function(){
  container.className = "square";

  list.className = "newinput";

  var boton = document.createElement('button');
  boton.type = "button";
  boton.className = "guardar";
  container.appendChild(boton);
  boton.appendChild(document.createTextNode("Guardar"));

  var botonX = document.createElement('button');
  botonX.type = "button";
  botonX.className = "botonCancel";
  container.appendChild(botonX);
  botonX.innerHTML = "&times;";
})
