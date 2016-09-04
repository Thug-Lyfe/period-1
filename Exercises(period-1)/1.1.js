/**
 * Created by butwhole on 29/08/2016.
 */

var names = ['marco','lars','Lind','bo','peter','jan'];
var filtered = names.filter(checkLength);

function checkLength(name){
    if(name.length <= 3) return name;
}

function Upper(name){
    return name.toUpperCase();
}

console.log(names)
console.log(names.filter(checkLength))
console.log(names.map(Upper)
)



