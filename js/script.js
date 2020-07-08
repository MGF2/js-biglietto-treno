var km = parseInt(prompt("Che distanza devi percorrere?")) ;
var eta = parseInt(prompt("Quanti anni hai?")) ;
var prezzo = 0.21 * km ;


if  (eta < 18)  {

  prezzo = prezzo * 0.8;

}
else if (eta > 65) {

  prezzo = prezzo * 0.6;

}

document.getElementById('prezzo') .innerHTML = prezzo + " " + "euro";
