/*NOMBRANDO VARIABLES, OBTENIENDO ELEMENTOS Y CREANDOLOS*/
var addlist = document.getElementById("addlist");
var boton = document.createElement('button');
var botonX = document.createElement('button');
var container = document.getElementsByClassName("container")[0];
var list = document.getElementById("list");

/*-----------------PRIMERA VERSION AÑADIR UNA LISTA--------------------*/
addlist.addEventListener("click", function(){

/*CREACION DE CLASES PARA TRABAJAR EN CSS*/
  boton.className = "guardar";
  botonX.className = "botonCancel";
  container.className = "square";
  list.className = "newInput";

/*ASIGNANDO HIJO A PADRE BOTON GUARDAR Y CANCELAR*/
  boton.type = "button";
  boton.appendChild(document.createTextNode("Guardar"));
  container.appendChild(boton);

  botonX.type = "button";
  botonX.innerHTML = "&times;";
  container.appendChild(botonX);
});

/*-------------------------SEGUNDA VERSION CLICK EN BOTON---------------------------------*/
boton.addEventListener("click", saveInput);

function saveInput(){
/*NOMBRANDO VARIABLES, OBTENIENDO ELEMENTOS Y CREANDOLOS*/
  var newName = document.getElementById("list").value;
  var newText = document.createTextNode(newName);
  var newElement = document.createElement("h2");
  var newList = document.createTextNode('Añadir una tarea');
  var newLink = document.createElement("input");

/*CREACION DE CLASES PARA TRABAJAR EN CSS*/
  newElement.className = 'newElement';
  newLink.className = 'link';

/*ASIGNANDO HIJO A PADRE DEL INPUT*/
  newElement.appendChild(newText);
  addlist.appendChild(newElement);
  container.appendChild(addlist);

  newLink.appendChild(newList);
  container.appendChild(newLink);

/*OCULTANDO BOTONES Y PRIMER IMPUT*/
  boton.style.display = 'none';
  botonX.style.display = 'none';
  list.style.display = 'none';

  /*DETENIENDO EL EVENTO*/
    boton.removeEventListener('click', saveInput);
};

/*-----------------------------TERCERA VERSION------------------------------------------*/
  newLink.addEventListener("click", addWork);

  function addWork(){
/*NOMBRANDO VARIABLES, OBTENIENDO ELEMENTOS Y CREANDOLOS*/
  var board = document.createElement('textarea');
  var texBoard = document.createTextNode('textWork');

  /*ASIGNANDO HIJO A PADRE DEL INPUT*/
    board.appendChild(textBoard);
    addWork.appendChild(board);
    container.appendChild(board);



/*CREACION DE CLASES PARA TRABAJAR EN CSS*/
  addWork.className = 'addWork';

/*DETENIENDO EL EVENTO
  boton.removeEventListener('click', addWork);*/

}
