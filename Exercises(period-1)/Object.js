/**
 * Created by marco on 04-09-2016.
 */
console.log("object.1 \n")
//create a person object
var person = {gender:"male",name:"Marco",leetness:"1337",Aids:"ofc"}
for(var type in person){
    console.log(type+ ": " + person[type]);
}
console.log("")
// test if the Aids property exists
console.log(person.hasOwnProperty("Aids"));
//delete Aids
delete person.Aids;
//test if the Aids property still exists
console.log(person.hasOwnProperty("Aids"));
console.log("")

//type out everything again to check
for(var type in person){
    console.log(type+ ": " + person[type]);
}

console.log("\nobject.2 \n")

function createPerson(fn,ln,age){
return {firstName:fn,lastName:ln,age:age};
}

function infoPrint(p){
    for(var type in p){
        console.log(type+ ": " + p[type]);
    }
}
infoPrint(createPerson("Marco","Blum",24))

console.log("\nobject.3 \n")