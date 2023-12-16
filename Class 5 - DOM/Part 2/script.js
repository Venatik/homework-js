let myArray = [1, 12, 123, 521, 42, 67, 96, 100, 10]
let list = document.getElementById("list");
let sumParagraph = document.getElementById("sum");

console.log(myArray.length);

for (number of myArray) {
    list.innerHTML += `<li>${number}</li>`;
}

function addAll() {
    let result = 0;
    let equation = "";
    for(let i=0; i < myArray.length; i++) {
        result += myArray[i];
        equation += myArray[i] + (i !== myArray.length - 1 ? " + " : "");
    }
    return {sum: result, equation: equation};
}

let result = addAll();
sumParagraph.innerText = `The sum of all numbers in the array is: ${result.sum}.\n The equation is: ${result.equation}.`