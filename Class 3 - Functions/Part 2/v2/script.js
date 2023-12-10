let btn = document.getElementById("convert1");
let btn2 = document.getElementById("convert2");
let result = document.getElementById("result");
let result2 = document.getElementById("result2");

btn.addEventListener("click", function() {
    let dogAge = document.getElementById("dogAge").value;
    let result = dogAge * 7;
    document.getElementById("result").innerHTML = (`Your dog is ${result} years old in human years!`);
});

btn2.addEventListener("click", function() {
    let humanAge = document.getElementById("humanAge").value;
    let result2 = (humanAge / 7).toFixed(1);
    document.getElementById("result2").innerHTML = (`You are ${result2} years old in dog years!`);
});