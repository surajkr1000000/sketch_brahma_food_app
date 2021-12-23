import React from "react";
import Styles from './RecipeTile.module.css';

function RecipeTile({recipe}){
    return(
        <div className={Styles.recipetile}>
            <img id={Styles.recipeimg} src={recipe["strMealThumb"]}/>
            <p id={Styles.recipepara}>{recipe["strMeal"]}</p>
        </div>
    )
}

export default RecipeTile;