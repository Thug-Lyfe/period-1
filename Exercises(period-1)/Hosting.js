//Hoisting betyder at hele scripted bliver læst før det bliver kørt.
//det betyder at en variable kan blive brugt før den bliver initiablised, som en variabel

a = 1;
var b = 1;
function f1(){
    return a + b;
}
console.log(f1())
var a;
function f2(){
    return a - b;
}
console.log(f2())
//hvis hoisting virker som beskrevet vil man få 2,0.
//hvis det ikke virker ville man få NaN,0 da "var a" først bliver kørt efter f1


