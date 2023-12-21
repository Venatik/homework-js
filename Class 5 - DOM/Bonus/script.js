let recipeName = prompt("What is the name of the recipe?");
let ingredientList = document.getElementById("ingredients");

function recipeFinal(name, ingredients) {
    let recipeDiv = document.getElementById("recipe");
    let h1 = document.createElement("h1");
    h1.textContent = name;
    recipeDiv.appendChild(h1);
    let h3 = document.createElement("h3");
    h3.textContent = "Ingredients:";
    recipeDiv.appendChild(h3);
    for(let i=0; i < ingredients.length; i++) {
        let li = document.createElement("li");
        li.textContent = ingredients[i].trim();
        ingredientList.appendChild(li);
    }
    recipeDiv.appendChild(ingredientList);
}

let numberOfIngredients = prompt("How many ingredients does the recipe need?");
let ingredients = [];
for(let i=0; i < numberOfIngredients; i++) {
    let ingredientName = prompt(`Name ingredient ${i + 1}: `);
    ingredients.push(ingredientName);
}

recipeFinal(recipeName, ingredients);