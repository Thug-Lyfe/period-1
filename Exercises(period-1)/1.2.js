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
    for(i in array){
        if(callback(array[i])){
            list.push(array[i]);
        }
    }
    return list;

}

function myMap(array,callback) {
    var list = [];
    for(i in array){
        list.push(callback(array[i]))
    }
    return list;

}

console.log(names)
console.log(myFilter(names,checkLength));
console.log(myMap(names,Upper));