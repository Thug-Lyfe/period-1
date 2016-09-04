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

function myFilter(callback){

    var res = [];
    for (var a = 0; a < this.length; a++){
        if (callback(this[a])){
            res.push(this[a]);
        }
    }
    return res;
}

function myMap(callback){
    var res = [];
    for (var a = 0; a < this.length; a++){
            res.push(callback(this[a]));

    }
    return res;
}

Array.prototype.myFilter = myFilter;
Array.prototype.myMap = myMap;
console.log(names.myFilter(checkLength))
console.log(names.myMap(Upper))
