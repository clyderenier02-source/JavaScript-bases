// Exercice 1 : Déclaration et modification de variables

const nom = "Jean";
let age = 25;
age = 30;

console.log(nom);
console.log(age);

// Exercice 2

const a = 10;
const b = 20;
let somme = a + b;

console.log(somme);
console.log(a*b);

// Exercice 3

// let number = prompt("rentrez un nombre");

// if(number > 10) {
//     console.log("Plus grand que 10")
// }
// else if (number <= 10){
//     console.log("Plus petit que 10")
// }

// Exercice 4

let number = 3;

if(number % 3 === 0) {
    console.log("le chiffres est impaire");
}
else {
    console.log("le chiffres est paire")
}

// Exercice 5

// const age2 = prompt("Vous avez quel age")

// if(age2 < 18) {
//     console.log("Tu est mineur")
// }
// else if (age2 >= 18 || age2 <= 65) {
//     console.log("Tu est adulte")
// }
// else {
//     console.log("Tu est senior")
// }

// Exercice 6

for(let i = 1; i <= 10; i++) {
    console.log(i)
}

// Exercice 7

let userNumber = parseInt(prompt("Affiche table de multiplication choisie"));

for(let i = 1; i <= 10; i++) {
    const result = i * userNumber;
    
    console.log(userNumber,"x", i, " = ", result);
}