// let myArray = [1, 2, 3, 4, 5, "Pane", 6, 7, 8, 9, 10, "Aleksandar", "More", null, 11, 12];

// function sumArray(array) {
//     let firstNumber = array.findIndex(item => typeof item === "number");
//     let lastNumber = array.slice().reverse().findIndex(item => typeof item === "number");

//     lastNumber = array.length - 1 - lastNumber; // Za delot do ovde bladornost do Google

//     let sum = array[firstNumber] + array[lastNumber];

//     console.log(`Min: ${array[firstNumber]}, Max: ${array[lastNumber]}, Sum: ${sum}`);

//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] !== "number") {
//             continue;
//         }  // Ova ne uspeav da go implementiram, i ako e commented out pak si raboti funkcijata isto
//         }
// }

// sumArray(myArray);

// // The solution above takes the FIRST and LAST number and adds them together. The required solution was to add the MINIMUM and MAXIMUM numbers. The solution below is what was needed:

function sumArray(array) {
    let firstNumberIndex = array.findIndex(item => typeof item === "number");

    //Proveruvame dali ke najdeme barem eden number, ako nema nieden ke frlime error.
    if (firstNumberIndex === -1) {
        console.log("No values in the array");
        return;
    }
    //Go zemame prviot number od nizata i dodeluvame vrednost, za da potoa mozeme da najdime min i max so menuvanje na vrednosta
    //vo for loop.
    let min = array[firstNumberIndex];
    let max = array[firstNumberIndex];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            // Ja menuvame vrednosta na min i max.
            if (array[i] < min) {
                min = array[i];
            }
            // Ja menuvame vrednosta na min i max.
            if (array[i] > max) {
                max = array[i];
            }
        }
    }
    //Ja dobivame sumata.
    let sum = min + max;

    console.log(`Min: ${min}, Max: ${max}, Sum: ${sum}`);
}

let myArray = [3, 4, 1, 4, 2, "Pane", 6, 7, 8, 9, 10, "Aleksandar", "More", null, 11, 12];
sumArray(myArray);