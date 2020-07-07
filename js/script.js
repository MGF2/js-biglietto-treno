var km = parseInt(prompt("Che distanza devi percorrere?")) ;
var eta = parseInt(prompt("Quanti anni hai?")) ;
var prezzo = 0.21 * km ;
var venti = prezzo * 0.8;
var quaranta = prezzo * 0.6;



if  (eta < 18)  {

  prezzo = venti

}
else if (eta > 65) {

  prezzo = quaranta

}

document.getElementById('prezzo') .innerHTML = prezzo + " " + "euro";
