"use strict";

//mes personnages
let perso1 = {
    nom: "vader",
    pointsvie: 100,
    energie: 380,
};

let perso2 = {
    nom: "yoda",
    pointsvie: 100,
    energie: 380
};

// Attaques
function vaderAttack() {
    perso2.pointsvie = perso2.pointsvie - 5;
}

function statsPvYoda() {
    let pointsyoda = document.querySelector(".pointsyoda");
    pointsyoda.innerHTML = perso2.pointsvie;
}

function yodaAttack() {
    perso1.pointsvie = perso1.pointsvie - 5;
}

function statsPvVader() {
    let pointsvader = document.querySelector(".pointsvader");
    pointsvader.innerHTML = perso1.pointsvie;
}


let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function() {
    if (perso2.pointsvie <= 0) {
        alert("GAME OVER!")
    }
    vaderAttack();
    statsPvYoda();
    perso1.energie = perso1.energie - 5;
    document.querySelector(".energievader").textContent = perso1.energie;
    perso1.pointsvie = perso1.pointsvie + 15;
    document.querySelector(".pointsvader").textContent = perso1.pointsvie;
});



let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function() {
    if (perso1.pointsvie <= 0) {
        alert("GAME OVER!")
    }
    yodaAttack();
    statsPvVader();
    perso2.energie = perso2.energie - 5;
    document.querySelector(".energieyoda").textContent = perso2.energie;
    perso2.pointsvie = perso2.pointsvie + 15;
    document.querySelector(".pointsyoda").textContent = perso2.pointsvie;
});










// Points de vie et energie
/*attack vader sur yoda 
qd il enlève des pv à yoda il perd de l'energie mais gagne des pv
document.querySelector("#btn1").addEventListener("click", function() {
    if (perso1.pointsvie <= 0) {
        alert("GAME OVER!")
    }
    perso1.pointsvie = perso1.pointsvie - 5;

    document.querySelector(".pointsyoda").textContent = perso1.pointsvie;

});

    perso1.pointsvie = perso1.pointsvie + 15;
    document.querySelector(".pointsvader").textContent = perso1.pointsvie;

    perso1.energie = perso1.energie - 5;
    document.querySelector(".energievader").textContent = perso1.energie; */


/*attack yoda sur vader
qd il enlève des pv à vader il perd de l'energie mais gagne des pv
document.querySelector("#btn4").addEventListener("click", function() {
    if (perso2.pointsvie <= 0) {
        alert("GAME OVER!")
    }
    perso2.pointsvie = perso2.pointsvie - 5;
    document.querySelector(".pointsvader").textContent = perso2.pointsvie;

    perso2.pointsvie = perso2.pointsvie + 15;
    document.querySelector(".pointsyoda").textContent = perso2.pointsvie;

    perso2.energie = perso2.energie - 5;
    document.querySelector(".energieyoda").textContent = perso2.energie;
}); */