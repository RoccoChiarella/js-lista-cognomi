var cognomi = ["Rossi","Verdi","Bruno","Ferrero"];

var cognomeDaCercare = prompt("Inserici il tuo cognome");

cognomi.push(cognomeDaCercare);

cognomi.sort();

var x = "";

var posizione = 0;

for (var i = 0; i < cognomi.length; i++) {
    x = x + '<li class="cognomi">'+ cognomi[i] +' </li>';
    if (cognomeDaCercare == cognomi[i]) {
        posizione = i;
    }
}

if (posizione != 0) {
    x = x + '<p id="posizione">La posizione del tuo cognome è la <span>'+ (posizione+1) +'°</span></p>';
} else {
    x = x + '<span id="posizione">Il cognome non è presente nel vettore</span>';
}

document.getElementById('cognomi').innerHTML = x;
