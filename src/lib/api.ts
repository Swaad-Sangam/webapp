const dotenv = require('dotenv');

dotenv.config()

function  getRecipe(query: string) {
    const api_key = process.env.SPOONACULAR_API_KEY
    const url = "https://api.spoonacular.com/recipes/complexSearch?query=" + query + "&apiKey=" + api_key
    response = await fetch(url)
    return response
}