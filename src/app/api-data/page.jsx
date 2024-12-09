'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

const page = () => {
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState(null);

  async function fetchData() {
    try {
      const randomNum = Math.floor(Math.random() * 10) + 1;
      const response = await fetch(`https://dummyjson.com/recipes/${randomNum}`);
      if (!response.ok) {
        setError('Something went wrong. Try again later');
      }
      const data = await response.json();
      setRecipe(data);

    } catch (error) {
      setError('Error fetching recipes:')
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <div className="px-16 py-10">
        <h1 className="font-semibold text-3xl text-center pb-2">Take a break and make yourself a tasty dish! :-)</h1>
        <h2 className="font-semibold text-2xl border-b-2 border-black text-center pb-2">Random Recipies</h2>
        <div className="shadow-xl px-4 py-8 my-4">
          {recipe ? (
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-xl">{recipe.name}</h2>
              <Image src={recipe.image} height={300} width={300} alt="recipe-image" />
              <p className="italic">{recipe.cuisine}</p>
              <p>{recipe.description}</p>
              <p><span className="font-semibold">Ingredients:</span> {recipe.ingredients.join(', ')}</p>
              <p><span className="font-semibold">Instructions:</span> {recipe.instructions.join(' ')}</p>
              <p><span className="font-semibold">Rating:</span> {recipe.rating}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default page
