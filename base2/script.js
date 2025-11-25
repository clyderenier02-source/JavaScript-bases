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

// let userNumber = parseInt(prompt("Affiche table de multiplication choisie"));

// for(let i = 1; i <= 10; i++) {
//     const result = i * userNumber;
    
//     console.log(userNumber + "x" + i + " = " + result);
// }

// Exercice 8

// let result = 0;

// for(let i= 1; i <= 100; i++) {
//     console.log("calcul en cours", result)
//     result += i;
// }

// Exercice 9

// let numberToFind = Math.floor(Math.random() * 10 + 1);
// finding = true;

// while(finding) {
// //    devine le nombre
//     let proposition = parseInt(prompt("Deviner un nombre entre 1 et 10"));
//     if(numberToFind === proposition) {
//         alert("Bravo, c’est correct !");
//         finding = false;
//     }
//     else {
//         alert("Essaye encore");
//     }
// }

// Exercice 10

for(let i = 0; i <= 50; i+=2) {
    console.log(i);
}

// Exercice 11

for(let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("C’est terminé !")

// Exercice 12

// let operation = prompt("Entrer une opération");
// let number1 = parseInt(prompt("Entrer le 1 nombres"));
// let number2 = parseInt(prompt("Entrer le 2 nombres"));

// if(operation === "addition") {
//     let result = number1 + number2;
//     console.log(`${number1} + ${number2} = ${result}`);
// } 
// else if(operation === "soustraction") {
//     let result = number1 - number2;
//     console.log(`${number1} - ${number2} = ${result}`);
// } 
// else if(operation === "multiplication") {
//     let result = number1 * number2;
//     console.log(`${number1} * ${number2} = ${result}`);
// } 
// else if(operation === "division") {
//     let result = number1 / number2;
//     console.log(`${number1} / ${number2} = ${result}`);
// }

// Exerxcice 13

const table = [12, 45, 3, 22, 34];
let max = table[0];

for(let i = 0; i < table.length; i++) {
    if(table[i] > max) {
        max = table[i];
    }
}

console.log(`Le plus grand nombre est ${max}`)

// Bonus
const table1 = [Math.floor(Math.random())];
let max1 = table1[0];

for(let i = 0; i < 50; i++) {
    table1.push(Math.floor(Math.random() * 500 + 1));
    if(table1[i] > max1) {
        max1 = table1[i];
    }
}

console.log(table1);
console.log(`Le plus grand nombre est ${max1}`);