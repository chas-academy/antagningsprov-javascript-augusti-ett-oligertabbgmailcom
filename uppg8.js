

function uppg8(){
// skapa en array med fem person objekt
// varje person objekt ska ha två properties, name och age
// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
// anropa funktionen och skicka med arrayen som argument
const people = [ 
{name: "Ana", age: 26 },
{name: "Altin", age: 43 },
{name: "Arta", age: 26 },
{name: "Ina", age: 36},
{name: "Bledi", age: 38 }
];
function printOver30(arr) {
    for(let person of arr) {
        if (person.age > 30) {
            console.log(person.name);
        }
    }
}
printOver30(people);
}
uppg8();
module.exports = { uppg8 };