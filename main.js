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
/*attack vader sur yoda 
qd il enlève des pv à yoda il perd de l'energie mais gagne des pv*/
document.querySelector("#btn1").addEventListener("click", function() {
    if (perso1.pointsvie <= 0) {
        alert("GAME OVER!")
    }
    perso1.pointsvie = perso1.pointsvie - 7;
    document.querySelector(".pointsyoda").textContent = perso1.pointsvie;

    perso1.pointsvie = perso1.pointsvie + 17;
    document.querySelector(".pointsvader").textContent = perso1.pointsvie;

    perso1.energie = perso1.energie - 15;
    document.querySelector(".energievader").textContent = perso1.energie;

});

/*attack yoda sur vader
qd il enlève des pv à vader il perd de l'energie mais gagne des pv*/
document.querySelector("#btn4").addEventListener("click", function() {
    if (perso2.pointsvie <= 0) {
        alert("GAME OVER!")
    }
    perso2.pointsvie = perso2.pointsvie - 7;
    document.querySelector(".pointsvader").textContent = perso2.pointsvie;

    perso2.pointsvie = perso2.pointsvie + 17;
    document.querySelector(".pointsyoda").textContent = perso2.pointsvie;

    perso2.energie = perso2.energie - 15;
    document.querySelector(".energieyoda").textContent = perso2.energie;
});