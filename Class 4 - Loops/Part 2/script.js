let myArray = [1, 2, 3, 4, 10];

function validateNumber(num) {
    if (typeof num !== "number") {
        return false;
    }
    else {
        return true;
    }
}

// Ako myArray ima bilo sto sto ne e broj, dobivame "Invalid Number!"
function sumArray(array) {
    let sum = 0;
    let counter = 0;
    while(counter < array.length) {
        if(!validateNumber(array[counter])) {
            return "Invalid Number!";
        }
        sum += array[counter];
        counter++;
    }
    return sum;
}

console.log(sumArray(myArray));