'use client';

import { useState, useEffect } from "react";

function cleanIngredientName(name) {
    if (!name) return "";

    // Remove everything after a comma (e.g., "chicken breast, 1 kg" → "chicken breast")
    let cleaned = name.split(",")[0];

    // Remove emojis using a regex (credit: Stack Overflow)
    cleaned = cleaned.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\u24C2|\uD83E[\uDD10-\uDDFF])/g,
        ""
    );

    // Remove extra spaces
    cleaned = cleaned.trim();

    return cleaned;
}

async function fetchMealIdeas(ingredient) {
    if (!ingredient) return [];

    const cleanName = cleanIngredientName(ingredient);
    console.log(cleanName);

    try {
        const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleanName}`
        );
        
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}



export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        if (!ingredient) return;
            const mealResults = await fetchMealIdeas(ingredient);
            setMeals(mealResults);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);


    return (

        <div className="p-4 rounded-lg shadow-md ">
            <h2 className="text-2xl font-semibold mb-5 text-center text-white">
                Meal Ideas for: {ingredient || "—"}
            </h2>
            <ul>
                {meals.map((meal) => (
                <li key={meal.idMeal} className="mb-4 rounded p-2 bg-yellow-500 w-100">

                    <p className="text-white text-2xl font-bold mb-2">{meal.strMeal}</p>
                    <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-24 h-24 object-cover rounded"
                    />
                    
            
                </li>
                ))}
            </ul>
        </div>
    );
}

