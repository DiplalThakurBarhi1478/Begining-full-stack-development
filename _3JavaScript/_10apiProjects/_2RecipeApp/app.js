const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeDetails = document.querySelector(".recipe-details");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");
const recipeDetailsContent = document.querySelector(".recipe-details-content");

const fetchRecipe = async (searchVal) => {
    
    recipeContainer.innerHTML = `<h2>Fetching your recipes..........</h2>`;

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchVal}`);
    let data = await response.json();
    
    recipeContainer.innerHTML = "";
    //console.log(data);

    data.meals.forEach(meal => {
        
        //console.log(meal);

        let recipeDiv = document.createElement("div");
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <img src=${meal.strMealThumb}>
            <h3>${meal.strMeal}</h3>
            <p><span>${meal.strArea}</span> Dish</p>
            <p>Belongs to <span>${meal.strCategory}</span> Category</p>
        
        `;

        const button = document.createElement("button");
        button.textContent = "View Recipe";
        recipeDiv.appendChild(button);
        recipeContainer.appendChild(recipeDiv);
        
        // adding event listener in the btn

        button.addEventListener("click", () => {
            openRecipePopup(meal);
        })

    })
}

const fetchIngredients = (meal) => {
    //console.log(meal);
    

    let ingredientsList = "";

    for(let i = 1; i <= 20; i++){
        const ingredient = meal[`strIngredient${i}`];
        if(ingredient){
            const measure = meal[`strMeasure${i}`];
            ingredientsList += `<li>${measure} ${ingredient}</li>`;
        }else{
            break;
        }
    }

    return ingredientsList;
}


const openRecipePopup = (meal) => {
    recipeDetailsContent.innerHTML = `
        <h2 class="recipeName">${meal.strMeal}</h2>
        <h3> Ingredient: </h3>
        <ul class="recipeIngredients"> ${fetchIngredients(meal)} </ul>
        <div class="recipeInstructions">
            <h3>Instructions: </h3>
            <p>${meal.strInstructions}</p>
        </div>
    `;


    recipeDetailsContent.parentElement.style.display = "block";
}


searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    
    //console.log("Button was clicked.");
    
    let searchVal = searchBox.value.trim();
    fetchRecipe(searchVal);
})


recipeCloseBtn.addEventListener("click", () => {
    recipeDetailsContent.parentElement.style.display = "none";
})




