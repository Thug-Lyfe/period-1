function f1(){
    return this;
}

console.log(f1() === global)


function add(c, d){
    return this.a + this.b + c + d;
}

var o = {a:1, b:3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as
// arguments in the function call
console.log(add.call(o, 5, 7)); // 1 + 3 + 5 + 7 = 16
// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
console.log(add.apply(o, [10, 20])); // 1 + 3 + 10 + 20 = 34

function f(){
    return this.a;
}

var g = f.bind({a:"marco er for cool"});
console.log(g());

var h = g.bind({a:"han burde herre meget få 12"}); // bind only works once! (desværre får han ikke 12 så)
console.log(h());
