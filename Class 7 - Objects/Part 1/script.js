function Dog(name, breed) {
    this.name = name;
    this.breed = breed;

    this.speak = function() {
        paragraph.innerHTML = `${this.name} the ${this.breed} says: Woof!`;
    }
}

let button = document.getElementById("submit");
let paragraph = document.getElementById("dogSpeak");

button.addEventListener("click", function(event) {
    event.preventDefault();

    let dogName = document.getElementById("dogName").value;
    let dogBreed = document.getElementById("dogBreed").value;
    let newDog = new Dog(dogName, dogBreed);

    newDog.speak();

    document.getElementById("dogName").value = "";
    document.getElementById("dogBreed").value = "";
});