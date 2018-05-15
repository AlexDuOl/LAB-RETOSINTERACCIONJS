var container = document.getElementsByClassName("container")[0];
var addlist = document.getElementById("addlist");
var list = document.getElementById("list");
var boton = document.createElement('button');
var botonX = document.createElement('button');
/*PRIMERA VERSION*/
addlist.addEventListener("click", function(){
  container.className = "square";
  list.className = "newInput";

  boton.type = "button";
  boton.className = "guardar";
  boton.appendChild(document.createTextNode("Guardar"));
  container.appendChild(boton);

  botonX.type = "button";
  botonX.className = "botonCancel";
  botonX.innerHTML = "&times;";
  container.appendChild(botonX);

/*SEGUNDA VERSION*/
boton.addEventListener("click", second);
});

function second(){
  var newName = document.getElementById("list").value;
  newName.value = " ";
  var newText = document.createTextNode(newName);
  var newElement = document.createElement("h2");
  newElement.className = 'newElement';
  newElement.appendChild(newText);
  addlist.appendChild(newElement);
  container.appendChild(addlist);
  boton.style.display = 'none';
  botonX.style.display = 'none';
  list.style.display = 'none';
  var newList = document.createTextNode('Añadir una tarea');
  var newLink = document.createElement("a");
  newLink.className = 'link';
  newLink.appendChild(newList);
  container.appendChild(newLink);
  boton.removeEventListener('click', second);
 }
