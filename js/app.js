var container = document.getElementsByClassName("container")[0];
var addlist = document.getElementById("addlist");
var list = document.getElementById("list");
var newName = document.getElementById("newName");

addlist.addEventListener("click", function(){
  container.className = "square";

  list.className = "newInput";

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

boton.addEventListener("click", function(){
  container.appendChild(document.createTextNode("Añadir una tarea"));
})
