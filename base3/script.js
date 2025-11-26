// Exercice 1 : Afficher les éléments d'un tableau

const number = [1, 2, 3, 4, 5];

for(let i = 0; i < number.length; i++) {
        console.log(`Nombre du tableau: ${number[i]}`)

}

// Exercice 2 : Calculer la somme des éléments d'un tableau

const tableau = [25, 5, 18, 38];

function sommeTableau(tableau) {
    let somme = 0;

    for(let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}

console.log(sommeTableau(tableau));

// Exercice 3 : Trouver le mot le plus long dans un tableau

const tableauMots = ["kiwi", "ananas", "framboise", "orange"];

function motPlusLong(tableauMots) {
    let maxMot = tableauMots[0];

    for(let mot of tableauMots) {
        if(mot.length > maxMot.length) {
            maxMot = mot;
        }
    }
    return maxMot;
}

console.log(motPlusLong(tableauMots));

// Exercice 4 : Inverser une chaîne de caractères

const chaine = "ecivres";

function inverserChaine(chaine) {
    let result = "";
    
    for(let i = 0; i < chaine.length; i++) {
        result = chaine[i] + result;
    }
    return result;
}

console.log(inverserChaine(chaine));

// Exercice 5 : Compter le nombre de voyelles dans une chaîne

let chaines = "JavaScript"

function compteurVoyelles(chaines) {
    let compteur = 0;

    for(let i = 0; i < chaines.length; i++) {
        let voyelles = chaines[i];
        if(voyelles === "a" || voyelles === "e" || voyelles === "i" || voyelles === "o" || voyelles === "u" || voyelles === "y") {
            compteur++;
        }
    }
    return compteur;
}

console.log(compteurVoyelles(chaines));

// Exercice 6 : Filtrer les nombres pairs d'un tableau

const tableaux = [2, 33, 52, 96, 8, 3, 78];

function nombresPaires(tableaux) {
    const resultat = [];

    for(let i = 0; i < tableaux.length; i++) {
        if(tableaux[i] % 2 === 0) {
            resultat.push(tableaux[i]);
        }
    }
    return resultat;
}

console.log(nombresPaires(tableaux))

// Exercice 7 : Compter les propriétés d'un objet

const objet = {
    nom: "Patpatrouille",
    age: 92,
    ville: "Afrique"
};

function compterProprietes(objet) {
    let compte = 0;

    for(let cle in objet) {
        console.log(`${cle}: ${objet[cle]}`)
        compte++;
    }
    return compte;
}

console.log(`Nombre de propriétés: ${compterProprietes(objet)}`);

// Exercice 8 : Convertir un tableau d'objets en un tableau de valeurs

let produits = [
    { nom: "Stylo", prix: 2 },
    { nom: "Cahier", prix: 5 },
    { nom: "Gomme", prix: 1 }
];

function extraireNoms(produits) {
    let noms = [];

    for(let parcour in produits) {
        noms.push(produits[parcour].nom)
    }
    return noms;
}

console.log(`Uniquement les noms des produit: ${extraireNoms(produits)}`)

// Exercice 9 : Calculer la factorielle d'un nombre

let n = 5

function factorielle(n) {
    let resultat = 1;
    
    for(let i = 1; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
    }

console.log(factorielle(n))

// Exercice 10 : Vérifier si un tableau est trié en ordre croissant

const table = [5, 2, 7, 6, 1];

function estTrie(table) {
    
    for(let i = 0; i < table.length; i++) {
        if(table[i] > table[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(estTrie([1, 2, 3, 4]));
console.log(estTrie(table))