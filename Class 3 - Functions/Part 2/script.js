function birthYear(year, species) {
    if (species === "dog") {
        let result = (new Date().getFullYear() - year) * 7;
        console.log(`Your dog is ${result} years old in human years!`);
    }
    else if (species === "human") {
        let result2 = (new Date().getFullYear() - year) / 7;
        console.log(`You are ${result2} years old in dog years!`);
}
    else {
        console.log("Please enter a valid species! Valid species are dog and human.");
    }
}

birthYear(2017, "dog");