function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
}

let button = document.getElementById("submit");
let paragraph = document.getElementById("dogSpeak");

function speak(dog) {
    paragraph.innerHTML = `${dog.name} the ${dog.breed} says: Woof!`;
}

button.addEventListener("click", function(event) {
    event.preventDefault();

    let dogName = document.getElementById("dogName").value;
    let dogBreed = document.getElementById("dogBreed").value;
    let newDog = new Dog(dogName, dogBreed);

    speak(newDog);

    document.getElementById("dogName").value = "";
    document.getElementById("dogBreed").value = "";
});