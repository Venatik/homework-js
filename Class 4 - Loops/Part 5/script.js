let myArray = [1, 2, 3, 4, 5, "Pane", 6, 7, 8, 9, 10, "Aleksandar", "More", null, 11, 12];

function sumArray(array) {
    let firstNumber = array.findIndex(item => typeof item === "number");
    let lastNumber = array.slice().reverse().findIndex(item => typeof item === "number");

    lastNumber = array.length - 1 - lastNumber; // Za delot do ovde bladornost do Google

    let sum = array[firstNumber] + array[lastNumber];

    console.log(`Min: ${array[firstNumber]}, Max: ${array[lastNumber]}, Sum: ${sum}`);

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            continue;
        }  // Ova ne uspeav da go implementiram, i ako e commented out pak si raboti funkcijata isto
        }
}

sumArray(myArray);