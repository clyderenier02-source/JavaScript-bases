// Exercice 1

const name = "Martin";
console.log(name)

let anneeNaissance = "2000";
anneeNaissance = 2025-2000;
console.log(anneeNaissance)

console.log("Bonjour Mr", name, "vous avez", anneeNaissance)

// Exercice 2

let note_maths = 15;
let note_français = 12;
let note_HG = 9;
let moyenne = (15+12+9) /3;
console.log("la moyenne est de", moyenne, "/20")

// Exercice 3

let sexe = 1;
    
if(sexe === 1) {
        console.log("sexe homme")
}
else if(sexe === 2) {
        console.log("sexe femme")
}

// Exercice 4

let heure = 12;

if (heure >= 6 && heure < 12) {
    console.log("Matin");
}
else if (heure >=12 && heure < 21) {
    console.log("Apres-midi")
}
else if (heure <= 24) {
    console.log("Nuit")
}

// Exercice 5

let choix = 2;

if (choix === 1) {
    console.log("Insérer")
}
else if (choix === 2) {
    console.log("Supprimer")
}
else if (choix === 3) {
    console.log("Afficher")
}
else if (choix === 4) {
    console.log("Ce choix n'existe pas»")
}

// Exercice 6

let reste = 15;

if (reste % 3 === 0 && reste % 5 === 0) {
    console.log("C'est un multiple de 3 et de 5")
}
else {
    console.log("Ce n'est pas un multiple de 3 et de 5")
}

// Exercice 7

let compteur = 44000

for(compteur = 44000; compteur <= 44999; compteur++) {
    console.log("codes postaux", + compteur)
}

// Exercice 8

let valeur = 0;

for(valeur = 0; valeur <= 20; valeur+=2) {
    console.log("valeur jusqu'a 20", valeur)
    if(valeur === 10) {
        console.log(valeur)
    }
}

// Exercice 10

let nombre = 20;
let nombreAleatoire = getRandomInt(1,100);

while(nombre <= 100) {
    console.log("le nombre est", nombreAleatoire)
    break
}