function birthYear(year) {
    input = prompt("What is your or your dog's birth year?");
    if (input >= 2010) {
        let result = (new Date().getFullYear() - input) * 7;
        console.log(`Your dog is ${result} years old in human years!`);
    }
    else if (input < 2010) {
        let result2 = (new Date().getFullYear() - input) / 7;
        console.log(`You are ${result2} years old in dog years!`);
}
}

birthYear(1989);