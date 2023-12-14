let myArray = ["Hello", "students", "of", "SEDC", "G7", "!"];

function createString(array) {
    let counter = 0;
    let string = "";
    while(counter < array.length) {
        string += array[counter] + " ";
        counter++;
    }
    return string;
}

alert(createString(myArray));