/*var primeraseccion = document.getElementById('primeraseccion');
var addlist = document.getElementById('addlist');*/
document.getElementById("#addlist").addEventListener("clik", primero);

function primero(evento) {
  alert("hola")
  document.getElementById("#addlist").removeEventListener("clik", primero);
}
