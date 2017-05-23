"use strict";

//mes personnages
let perso1 = {
    nom: "vader",
    pointsvie: 100,
    energie: 180
};

let perso2 = {
    nom: "yoda",
    pointsvie: 100,
    energie: 180
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
        alert("PERDU TU AS!")
    }
    vaderAttack();
    statsPvYoda();
    move();
    perso1.energie = perso1.energie - 5;
    document.querySelector(".energievader").textContent = perso1.energie;
    perso1.pointsvie = perso1.pointsvie + 15;
    document.querySelector(".pointsvader").textContent = perso1.pointsvie;
});

function move() {
    let vader = document.querySelector(".vader");
    let classes = vader.className;
    vader.classList.add("vader-move");
    vader.addEventListener('animationend', function() {
        vader.className = classes;
    })
}

/* recup les sabres caches */
function toggle(id) {
    let attacksabre = document.querySelector(id);
    if (attacksabre.style.display == "none") {
        attacksabre.style.display = "block";

    } else {
        attacksabre.style.display = "none";
    }
}

function isHidden(id) {
    return (id.offesetParent === null)
}

/*function isHidden(id) {
    let style = window.getComputedStyle(id);
    return (style.display === 'none')
}
*/

/*Pour annuler l'animation 
déclarer une variable qui cible la classe d'origine de l'élément
sur lequel je rajoute ensuite une animation en lui attribuant une nouvelle classe.
 Ensuite dans l'event 'animationend' réattribuer sa classe d'origine à l'élément.*/

let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function() {
    if (perso1.pointsvie <= 0) {
        alert("C'est à croire qu'il est protégé par la Force")
    }
    yodaAttack();
    statsPvVader();
    move2();
    perso2.energie = perso2.energie - 5;
    document.querySelector(".energieyoda").textContent = perso2.energie;
    perso2.pointsvie = perso2.pointsvie + 15;
    document.querySelector(".pointsyoda").textContent = perso2.pointsvie;
});

function move2() {
    let yoda = document.querySelector(".yoda");
    let classes = yoda.className;
    yoda.classList.add("yoda-move");
    yoda.addEventListener('animationend', function() {
        yoda.className = classes;
    })
}


let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function healperso1() {
    if (perso1.energie <= 90) {} else {
        alert("Tu ne connais pas le pouvoir du côté obscur");
        perso1.energie = (perso1.energie) + 20;
        vader.style.display = "none";
    }
});


/*let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function() {
document.querySelector(".yoda")
});
*/



/*
let attackMove = function() {
    document.querySelector('#attack-sabre').addEventListener("click", function() {
        document.querySelector('.vader').classList.remove("hidden");
    });
}*/