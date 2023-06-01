const dotenv = require('dotenv');

dotenv.config()
const API_KEY = process.env.SPOONACULAR_API_KEY

function  getRecipe(query: string) {
    url = "https://api.spoonacular.com/recipes/complexSearch?query=" + query + "&apiKey=" + API_KEY
    response = await fetch(url)
    return response
}

function getRecipeByIngridents(ingredients: string[]){
    url = "https://api.spoonacular.com/recipes/findByIngredients?ingredients="
    ingredients.forEach(e=> {
        url += "+" + e ","  
    });
    url += "&apiKey=" + API_KEY
    response = await fetch(url)
    return response
}

function getRecipeSteps(recipe_id : number) {
    url = "https://api.spoonacular.com/recipes/" + recipe_id + "/analyzedInstructions" + "&apiKey=" + API_KEY
    response = await fetch(url)
    return response
}