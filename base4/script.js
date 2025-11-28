// Exercice 1 – Compter les multiples de 3 ou 5

const multiples = [];

for(let i = 1; i <= 100; i++) {
    const nombre = [i];
    if(nombre % 3 === 0 || nombre % 5 === 0) {
        multiples.push(nombre);
    }
    else {
        multiples.push(`!${nombre}`);
    }
}

console.log(multiples)

// Exercice 2 – Filtrer les notes valides

const notes = [15, -3, 12, 0, 19, 22, 8];
const valides = [];
let i = 0;

while(i < notes.length) {
    let note = notes[i];
    if(note > 0 && note < 20) {
        valides.push(note);
    }
    i++;
}

console.log("Nombre de notes valide :", valides);
console.log("Nombre de notes écartées :", notes.length - valides.length);

// Exercice 3 – Parcourir un objet d’utilisateurs

const users = {
    alice: 18,
    bob: 25,
    charlie: 17,
    dave: 30
}

let accesOK = 0;

for(let nom in users) {
    let age = users[nom]
    if(age >= 18 && age !== 25) {
        console.log(`Accès autorisé : ${nom} (${age})`)
        accesOK++
    }
    else {
        console.log(`Accès refusé : ${nom} (${age})`);
    }
}

console.log(`Nombre total d'acès accordés : ${accesOK}`)

// Exercice 4 – Addition sélective dans un tableau

const nombres = [2, 7, 10, 21, 14, 3];
let resultat = [];
let somme = 0;

for(let n of nombres) {
    const pair = (n % 2 === 0 && n > 5);
    const impair = (n % 2 !== 0 && n < 10);

    if(pair || impair) {
        somme += n;
        resultat.push(n);
    }
}

console.log(`Somme des nombres : ${somme}`);
console.log(`Nombres retenu : ${resultat}`);

// Exercice 5 – Inventaire en boucle while

const stock = {
    pommes: 4,
    bananes: 0,
    poires: 3,
    mangues: 1
};

let rupture = [];

for(let fruit in stock) {
    while(stock[fruit] > 0) {
        stock[fruit]--;
        console.log(`${fruit}: ${stock[fruit]}`);
    }
    if(stock[fruit] === 0 && !rupture.includes(fruit)) {
        rupture.push(fruit);
    }
}

console.log(`Affichage de la liste en rupture : ${rupture}`);

// Exercice 6 – Tableau de nombres aléatoires et bonus

const nums = [];

for(let i = 0; i < 20; i++) {
    let nombre = Math.floor(Math.random() * 30);
    nums.push(nombre)
}

for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 4 === 0 || nums[i] % 6 === 0) {
        nums[i] *= 2;
    }
    else if(nums[i] % 2 !== 0) {
        nums[i] = 1;
    }
}

console.log(nums);

// 💡 DANGER ZONE - BONUS
// Exercice 7 – Fusion d’objets sans fonction

const o1 = {a: 1, b: 2, c: 3};
const o2 = {b: 4, c: 3, d: 5};

const fusion = {};

for(let cle in o1) {
    fusion[cle] = o1[cle];
}

for(let key in o2) {
    if(!(key in fusion) || fusion[key] !== o2[key]) {
        fusion[key] = o2[key];
    }
}

console.log(fusion);

// Exercice 8 – Recherche dans un tableau d’objets

const produits = [
    {nom: "stylo", prix: 1.2, dispo: true},
    {nom: "cahier", prix: 2.5, dispo: false},
    {nom: "crayon", prix: 0.8, dispo: true},
    {nom: "gomme", prix: 0.5, dispo: true}
];

const achats = [];
const ignores = [];

for(let i = 0; i < produits.length; i++) {
    if(produits[i].dispo = true && produits[i].prix < 2) {
        achats.push(produits[i].nom);
    }
    else if(!produits[i].dispo || produits[i].prix >= 2) {
        ignores.push(produits[i].nom);
    }
}

console.log(`Achat : ${achats}`);
console.log(`Ignorés : ${ignores}`);

// Exercice 9 – Palindrome simplifié (sans fonction)

const mot = "kayak";
const chars = [];

for(let i = 0; i < mot.length; i++) {
    chars.push(mot[i]);
}

const inverse = [];
for(let i = chars.length - 1; i >= 0; i--) {
    inverse.push(chars[i])
}

let estPalindrome = true;
for(let i = 0; i < chars.length; i++) {
    if(chars[i] !== inverse[i] || !chars[i]) {
        estPalindrome = false;
        break
    }
}

if (estPalindrome) {
    console.log(`${mot} est un palindrome`);
} else {
    console.log(`${mot} n'est pas un palindrome`);
}

// Exercice 10 – Somme conditionnelle avec for of

const grilles = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let sommes = 0;

for(const sousTableau of grilles) {
    for(const nombre of sousTableau) {
        if((nombre % 2 === 0 && nombre >= 4) || (nombre % 2 !== 0 && nombre <= 5)) {
            sommes += nombre;
        }
    }
}

console.log(sommes);


