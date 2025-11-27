"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
}

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);
 

  if (!meals.length) {
    return (
      <div>
        <p className="text-gray-300">No meal ideas found.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">
        Meal ideas for {ingredient}
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {meals.map(({ idMeal, strMeal }) => (
          <div key={idMeal}className="bg-black text-white p-2 border rounded-md text-center hover:bg-blue-900 cursor-pointer">{strMeal}</div>
        ))}
      </div>
    </div>
  );
}