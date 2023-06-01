import { SPOONACULAR_API_KEY } from "$env/static/private";

const dotenv = require('dotenv');

dotenv.config()
const API_KEY = SPOONACULAR_API_KEY

async function  getRecipe(query: string) {
    let url = "https://api.spoonacular.com/recipes/complexSearch?query=" + query + "&apiKey=" + API_KEY
    let response = await fetch(url)
    let data = await response.json()
    return data
}

async function getRecipeByIngridents(ingredients: string[]){
    let url = "https://api.spoonacular.com/recipes/findByIngredients?ingredients="
    ingredients.forEach(e=> {
        url += "+" + e + ","  
    });
    url += "&apiKey=" + API_KEY
    let response = await fetch(url)
    let data = await response.json()
    return data
}

async function getRecipeSteps(recipe_id : number) {
    let url = "https://api.spoonacular.com/recipes/" + recipe_id + "/analyzedInstructions" + "&apiKey=" + API_KEY
    let response = await fetch(url)
    let data = await response.json()
    return data
}

async function getRecipeId(query : string){
    let url = "https://api.spoonacular.com/recipes/complexSearch?query=" + query + "&number=1&apiKey=" + API_KEY
    let response = await fetch(url)
    let data = await response.json()
    return data.results[0].id
}

async function getNutirtionValue(recipe_id : string) {
    let url = "https://api.spoonacular.com/recipes/" + recipe_id + "/nutritionWidget.json" + "&apiKey=" + API_KEY
    let response = await fetch(url)
    let data = await response.json()
    return data
}