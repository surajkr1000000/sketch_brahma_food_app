import React, { useState } from "react";
import Styles from './HomePage.module.css'
import axios from "axios";
import RecipeTile from "../../RecipeTile";

function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipies] = useState([]);

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

    async function getRecipies() {
        var result = await axios.get(url)
        setRecipies(result.data.meals)
        console.log(result.data)
    }

    const onsubmit = (e) => {
        e.preventDefault();
        getRecipies();
    };

    return (
        <div className={Styles.home}>
            <div className={Styles.homesearch}>
                <form className={Styles.appform} onSubmit={onsubmit}>
                    <input id={Styles.textinp} type="text"
                        placeholder="Search Recipes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <input id={Styles.button} type="submit" value="search" />
                </form>
            </div>

            <div className={Styles.homerecipe}>       
                    {recipes.map(recipe => {
                    return < RecipeTile recipe={recipe} />
                    })}      
            </div>
 
        </div>
    )
}

export default HomePage;