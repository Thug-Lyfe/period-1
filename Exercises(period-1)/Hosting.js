//Hoisting betyder at hele scripted bliver læst før det bliver kørt.
//Det betyder at en variable kan blive brugt før den bliver declared, som en variabel
//Declarations bliver hoistet, initializtiations bliver ikke hoistet

a = 1;
var b;
function f1(){
    console.log(a + " , " + b)
}
f1();
b = 2;
var a;
f1()
a = 3

// Første gang f1() bliver kørt kan den bruge både a og b, da de begge er blevet declared, men pga. at b først bliver initialized efter, er den undefined
// Anden gang er de begge blevet initialized, men den viser stadig 1,2, da a=3 er en initialization og er derfor ikke hoistet.
b = undefined;
a = undefined;
//Pga. hoisting vil koden over være det samme som følgende:


var a = 1;
var b;
function f1(){
    console.log(a + " , " + b)
}
f1();
b = 2;
f1()
a = 3

