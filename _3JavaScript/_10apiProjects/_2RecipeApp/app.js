const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");


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
        

    })
}


searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    
    //console.log("Button was clicked.");
    
    let searchVal = searchBox.value.trim();
    fetchRecipe(searchVal);
})