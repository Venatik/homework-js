let storyArray = ["Stefan", "well-rested", "chilling"];
console.log(storyArray);

function tellStory(array) {
    return(`This is ${array[0]}. ${array[0]} is a nice person. Today ${array[0]} is ${array[1]}. ${array[0]} is ${array[2]}. The end.`);
}

let story = tellStory(storyArray);
alert(story);
console.log(typeof(story));

// Alternattive solution

// let storyArray = ["Stefan", "well-rested", "chilling"];

// function tellStory([name, mood, activity]) {
//     return(`This is ${name}. ${name} is a nice person. Today ${name} is ${mood}. ${name} is ${activity}. The end.`);
// }

// let story = tellStory(storyArray);
// alert(story);
// console.log(typeof(story));