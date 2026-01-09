import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
document.addEventListener('DOMContentLoaded', excusas);
function excusas(){
  let who = ['Mi perro', 'Un duende','Mi abuela','El wifi','Mis zapatillas de deporte', 'Mi espalda'];
  let action = ['se comió','escondió','me entretuvo', 'no funcionaba','se han declarado', 'se ha dado de baja'];
  let what = ['los deberes','las llaves del coche','cocinando','y por tanto no podía abrir el navegador', 'independiente', 'haciendo referencia a la vagueza'];
  let where = ['en mi casa','en mi bolso','en tu cocina', 'en el trabajo', 'debajo del sofa', 'de mi cuerpo'];

  let randomWho = who[Math.floor(Math.random()*who.length)];
  let randomAction = action[Math.floor(Math.random()*action.length)];
  let randomWhat = what[Math.floor(Math.random()*what.length)];
  let randomWhere = where[Math.floor(Math.random()*where.length)];

  let excusas = `${randomWho} ${randomAction} ${randomWhat} ${randomWhere}.`;
  
  document.getElementById('excusa').innerHTML = excusas;

  }
