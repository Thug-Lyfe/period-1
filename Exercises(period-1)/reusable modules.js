var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
        console.log(privateCounter)
    }
    return {
        increment: function() {changeBy(1);},
        decrement: function() {changeBy(-1);},
        value: function() { return privateCounter;}
    }
};
var counter1 = makeCounter();
var counter2 = makeCounter();
for(i = 0;i<10;i++){
    counter1.increment();
}


counter2.increment()
counter2.increment()