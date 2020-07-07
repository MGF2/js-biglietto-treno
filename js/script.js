var km = prompt("Che distanza devi percorrere?") ;
var eta = prompt("Quanti anni hai?") ;
var prezzo = 0.21 * km ;

document.getElementById('prezzo') .innerHTML = prezzo + " " + "euro";

if  (eta < 18)  {

  document.getElementById('prezzo') .innerHTML = prezzo * 0.8 + " " + "euro" ;

}

else if (eta > 65) {

  document.getElementById('prezzo') .innerHTML = prezzo * 0.6 + " " + "euro" ;

}
