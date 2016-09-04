/**
 * Created by marco on 02-09-2016.
 */

var a1 = [1,2,3];
var a2 = [1,2,3];

function handleNumArrays(arr1,arr2,callback){
    var res = [];
    for(var a = 0; a<arr1.length;a++){
    res.push(arr1[a]+arr2[a]);
    }

return callback(res);
}



handleNumArrays(a1,a2,function(res){
    console.log("print: " + res.join(","));
})

handleNumArrays(a1,a2,function(res){
    var sum = 0;
    res.forEach(function(value){sum+=value})
    console.log("sum: " + sum);
})

handleNumArrays(a1,a2,function(res){
    var multi = [];
    res.forEach(function(value){multi.push(value*10)})
    console.log("sum: " +  multi.join(","));
})