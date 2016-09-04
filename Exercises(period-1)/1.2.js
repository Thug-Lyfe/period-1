/**
 * Created by marco on 02-09-2016.
 */

var names = ['marco','lars','Lind','bo','peter','jan'];

function checkLength(name){
    if(name.length <= 3) return name;
}

function Upper(name){
    return name.toUpperCase();
}

function myFilter(array,callback) {
    var list = [];
    for(a in array){
        if(callback(array[a])){
            list.push(array[a]);
        }
    }
    return list;

}

function myMap(array,callback) {
    var list = [];
    for(a in array){
        list.push(callback(array[a]))
    }
    return list;

}

console.log(names)
console.log(myFilter(names,checkLength));
console.log(myMap(names,Upper));