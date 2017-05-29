"use strict";

//mes personnages
let perso1 = {
    nom: "vader",
    pointsvie: 50,
    energie: 60
};

let perso2 = {
    nom: "yoda",
    pointsvie: 50,
    energie: 60
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

//game over//
function gameOver() {
    if ((perso1.pointsvie === 0) || (perso2.pointsvie === 0)) {
        gameOver.style.display = "block";
    }
}

//premier bouton attack//
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function() {
    if (perso2.pointsvie <= 0) {
        alert("J’ai apporté la paix, la justice, la liberté et la sécurité à mon nouvel Empire ! ")
        reinitialise();
    }
    vaderAttack();
    statsPvYoda();
    move();
    sabermove();
    toggle();
    jouerSon()
    perso1.energie = perso1.energie - 5;
    document.querySelector(".energievader").textContent = perso1.energie;
    perso1.pointsvie = perso1.pointsvie + 10;
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
function toggle() {
    let attacksabre = document.querySelector(".attacksabre");
    if (attacksabre.style.display == "none") {
        attacksabre.style.display = "block";

    } else {
        attacksabre.style.display = "block";
    }
}

/*function isHidden() {
    return (attacksabre.offesetParent === null)
}*/

/*function isHidden(id) {
    let style = window.getComputedStyle(id);
    return (style.display === 'none')
}
*/

function sabermove() {
    let attacksabre = document.querySelector(".attacksabre");
    let classes = attacksabre.className;
    attacksabre.classList.add("attacksabre-move");
    attacksabre.addEventListener('animationend', function() {
        attacksabre.className = classes;
    })
}
/*Pour annuler l'animation 
déclarer une variable qui cible la classe d'origine de l'élément
sur lequel je rajoute ensuite une animation en lui attribuant une nouvelle classe.
 Ensuite dans l'event 'animationend' réattribuer sa classe d'origine à l'élément.*/

function jouerSon() {
    let sound = document.querySelector("#sabersound");
    sound.play();
}

//deuxieme bouton magic//
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function magicperso1() {
    if (perso2.pointsvie <= 0) {
        reinitialise();
    }
    fireballdAnim();
    jouerfSon()
    perso2.pointsvie = perso2.pointsvie - 10;
    document.querySelector(".pointsyoda").textContent = perso2.pointsvie;
});

function fireballdAnim() {
    let fireballd = document.querySelector(".fireballd");
    let classes = fireballd.className;
    fireballd.classList.add("fireballAnimation");
    fireballd.addEventListener("animationend", function() {
        fireballd.className = classes;
        let i = Math.floor(steps(10));
    })
}

function jouerfSon() {
    let sound = document.querySelector("#fireballsound");
    sound.play();
}

//troisieme bouton heal//
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function() {
    heal();
    vaderAttack();
    compter();
    /* vader.style.display = "none"; la fonction display: none; 
    masque totalement ou affiche l'élément et annule des propriétés */
});

function heal() {
    console.log((perso1.pointsvie) + 5);
    if (perso1.pointsvie <= 30) {
        perso1.pointsvie = (perso1.pointsvie) + 5;
        document.querySelector(".pointsvader").textContent = perso1.pointsvie;
    }
    if (perso1.pointsvie <= 25) {
        perso1.pointsvie = (perso1.pointsvie) - 5;
        document.querySelector(".pointsvader").textContent = perso1.pointsvie;
        alert("Je ne peux plus utiliser le côté obscur de la Force ");
    }
};

function compter() {
    let nbClick = 0;
    let nbClickMax = 1;
    nbClick++;
    if (nbClick >= nbClickMax) {
        document.getElementById('#btn3').disabled = true;
    }
}

/* A partir de 30 pv on peut utiliser le bouton heal qui nous rajoute 5 pv
au-delà de 20pv on ne peut plus*/

//quatrieme bouton attack idem premier//
let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function() {
    if (perso1.pointsvie <= 0) {
        alert("Robuste je suis grâce à la Force")
        reinitialise();
    }
    yodaAttack();
    statsPvVader();
    move2();
    saberymove();
    toggley();
    jouerSon()
    gameOver();
    perso2.energie = perso2.energie - 5;
    document.querySelector(".energieyoda").textContent = perso2.energie;
    perso2.pointsvie = perso2.pointsvie + 10;
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

/* recup les sabres caches */
function toggley() {
    let attacksabrey = document.querySelector(".attacksabrey");
    if (attacksabrey.style.display == "none") {
        attacksabrey.style.display = "block";

    } else {
        attacksabrey.style.display = "block";
    }
}

function saberymove() {
    let attacksabrey = document.querySelector(".attacksabrey");
    let classes = attacksabrey.className;
    attacksabrey.classList.add("attacksabrey-move");
    attacksabrey.addEventListener('animationend', function() {
        attacksabrey.className = classes;
    })
}

function jouerSon() {
    let sound = document.querySelector("#sabersound");
    sound.play();
}

// cinquieme bouton magic//
let btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function magicperso2() {
    if (perso1.pointsvie <= 0) {
        reinitialise();
    }
    fireballyAnim();
    jouerfSon()
    perso1.pointsvie = perso1.pointsvie - 10;
    document.querySelector(".pointsvader").textContent = perso1.pointsvie;
});

function fireballyAnim() {
    let firebally = document.querySelector(".firebally");
    let classes = firebally.className;
    firebally.classList.add("fireballyAnimation");
    firebally.addEventListener("animationend", function() {
        firebally.className = classes;
        let i = Math.floor(steps(10));
    })
}

function jouerfSon() {
    let sound = document.querySelector("#fireballsound");
    sound.play();
}

// sixieme bouton heal //
let btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", function() {
    healy();
    yodaAttack();
    comptery()
});

function healy() {
    console.log((perso2.pointsvie) + 5);
    if (perso2.pointsvie <= 30) {
        perso2.pointsvie = (perso2.pointsvie) + 5;
        document.querySelector(".pointsyoda").textContent = perso2.pointsvie;
    }
    if (perso2.pointsvie <= 25) {
        perso2.pointsvie = (perso2.pointsvie) - 5;
        document.querySelector(".pointsyoda").textContent = perso2.pointsvie;
        alert("Personne par la guerre, ne devient grand");
    }
};

function comptery() {
    let nbClick = 0;
    let nbClickMax = 1;
    nbClick++;
    if (nbClick >= nbClickMax) {
        document.getElementById('#btn6').disabled = true;
    }
}