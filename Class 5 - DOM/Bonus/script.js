let recipeName = prompt("What is the name of the recipe?");
let ingredientNumber = prompt("How many ingredients are there?"); // Ne e relevantno
let ingredientList = document.getElementById("ingredients");

function recipeFinal(name, content) {
    let recipeDiv = document.getElementById("recipe");
    let h1 = document.createElement('h1');
    h1.textContent = name;
    recipeDiv.appendChild(h1);
    let h3 = document.createElement('h3');
    h3.textContent = "Ingredients:";
    recipeDiv.appendChild(h3);
    // let ingredients = content.split(",");
    for(let i=0; i < ingredients.length; i++) {
        let li = document.createElement('li');
        li.textContent = ingredients[i].trim();
        ingredientList.appendChild(li);
    }
    recipeDiv.appendChild(ingredientList);
}

for(let i=0; i < content; i++) {
    let ingredientContent = prompt(`Name every needed ingredient ${i + 1} `);
    let li = document.createElement('li');
    li.textContent = ingredientContent.trim();
    ingredientList.appendChild(li);
}

recipeFinal(recipeName, ingredientContent);