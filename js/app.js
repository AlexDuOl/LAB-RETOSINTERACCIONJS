var addlist = document.getElementById("addlist");
var boton = document.createElement('button');
var botonX = document.createElement('button');
var container = document.getElementsByClassName("container")[0];
var list = document.getElementById("list");

/*PRIMERA VERSION*/
addlist.addEventListener("click", function(){
  boton.className = "guardar";
  botonX.className = "botonCancel";
  container.className = "square";
  list.className = "newInput";

  boton.type = "button";
  boton.appendChild(document.createTextNode("Guardar"));
  container.appendChild(boton);

  botonX.type = "button";
  botonX.innerHTML = "&times;";
  container.appendChild(botonX);
});

/*SEGUNDA VERSION*/
boton.addEventListener("click", second);

function second(){
  var newText = document.createTextNode(newName);
  var newElement = document.createElement("h2");
  var newList = document.createTextNode('Añadir una tarea');
  var newLink = document.createElement("a");
  var newName = document.getElementById("list").value;

  newElement.className = 'newElement';

  newName.value = " ";

  newElement.appendChild(newText);
  addlist.appendChild(newElement);
  container.appendChild(addlist);

  newLink.className = 'link';
  newLink.appendChild(newList);
  container.appendChild(newLink);

  boton.style.display = 'none';
  botonX.style.display = 'none';
  list.style.display = 'none';

  boton.removeEventListener('click', second);
 }

 /*TERCERA VERSION*/




















 
