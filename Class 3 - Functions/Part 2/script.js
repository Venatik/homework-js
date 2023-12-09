function ageCalc(year, species) {
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

ageCalc(2017, "dog");
ageCalc(1989, "human");

//Ova resenie mi e malce rigidno ama ne mi teknuva nisto drugo momentalno. Isto ne sum siguren za matematikata, google mi dava povise opcii, ama ja ostaviv kolku za primer.