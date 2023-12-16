// let firstName = ["Roland", "Eddie", "Jake", "Susannah"]
// let lastName = ["Deschain", "Dean", "Chambers", "Dean"]
// let resultList = document.getElementById("list");

// function fullName() {
//     for (let i = 0; i < firstName.length; i++) {
//         resultList.innerHTML += `<li>${i + 1}. ${firstName[i]} ${lastName[i]}</li>`
//     }
//     let htmlStyle = document.querySelector("html");
//     htmlStyle.style.backgroundColor = "black";
//     htmlStyle.style.color = "white";
//     htmlStyle.style.fontFamily = "Arial";
// }

// fullName();

// We need to add a failsafe in case there are different number of first and last names.

let firstName = ["Roland", "Eddie", "Jake", "Susannah"]
let lastName = ["Deschain", "Dean", "Chambers", "Dean"]
let resultList = document.getElementById("list");

function fullName(firstName, lastName) {
    if(firstName.length !== lastName.length){
        resultList.innerHTML += `<li>Arrays are not the same</li>`
        return false;
    }
    for (let i = 0; i < firstName.length; i++) {
        resultList.innerHTML += `<li>${i + 1}. ${firstName[i]} ${lastName[i]}</li>`
    }
    let htmlStyle = document.querySelector("html");
    htmlStyle.style.backgroundColor = "black";
    htmlStyle.style.color = "white";
    htmlStyle.style.fontFamily = "Arial";
}

fullName(firstName, lastName);