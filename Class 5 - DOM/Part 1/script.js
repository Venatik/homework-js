let firstDiv = document.getElementById("first");
let allParagraphs = document.getElementsByTagName("p");
let secondDiv = document.querySelector(".anotherDiv");
let thirdDiv = document.querySelector("body > div:nth-of-type(3)");

console.log(firstDiv);
console.log(secondDiv);
console.log(thirdDiv); // Ovie ne se neophodni, samo u console za da e po jasno.

let changeHeading = thirdDiv.firstElementChild;
changeHeading.innerHTML = "This is now changed.";
let changeParagraph = thirdDiv.lastElementChild
changeParagraph.innerHTML = "And also this!";