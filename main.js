"use strict";

/*let stats = ['pvies', 'energie', 'attack', 'avoid', 'treat'];
for (let x = 0; x < stats.length; x++) {
} */

//mes personnages
let perso1 = {
    nom: "vader",
    pointsvie: 100,
    energie: 380
};

let perso2 = {
    nom: "yoda",
    pointsvie: 100,
    energie: 380
};
// boutons
/*let btn1 = document.querySelector("#btn1");
bn1.addEventListener("click", function() {
    vaderAttack();
    afficherEnergieYoda();
});*/

// Points de vie et energie
//attack vader sur yoda
document.querySelector("#btn1").addEventListener("click", function() {
    if (perso1.pointsvie <= 0) {
        alert("GAME OVER!")
    }
    perso1.pointsvie = perso1.pointsvie - 7;

    document.querySelector(".pointsyoda").textContent = perso1.pointsvie;
});

//attack yoda sur vader
document.querySelector("#btn4").addEventListener("click", function() {
    if (perso2.pointsvie <= 0) {
        alert("GAME OVER!")
    }
    perso2.pointsvie = perso2.pointsvie - 7;

    document.querySelector(".pointsvader").textContent = perso2.pointsvie;
});











/*attaques et energie
function vaderAttack() {
    yoda.pointsvie = yoda.pointsvie - 20;
}

function yodaAttack() {
    vader.pointsvie = vader.pointsvie - 30;
}

function afficherEnergieVader() {
    let energie1 = document.querySelector(".energiedark");
    energie1.innerHTML = vader.energie;
}

function afficherEnergieYoda() {
    let energie2 = document.querySelector(".energie2");
    energie2.innerHTML = yoda.energie;
}*/