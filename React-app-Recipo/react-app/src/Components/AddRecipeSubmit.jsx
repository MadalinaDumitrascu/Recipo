import axios from "axios";
import { useAtom } from "jotai";
import React from "react";
import { useNavigate } from "react-router";
import {
  RecipeIngredientQuantities,
  RecipeIngredients,
  RecipeSteps,
  RecipeTitle,
} from "../State";
import {  Trans } from 'react-i18next';

const AddRecipeSubmit = () => {
  const [Ingredients] = useAtom(RecipeIngredients);
  const [Quantities] = useAtom(RecipeIngredientQuantities);
  const [Steps] = useAtom(RecipeSteps);
    const [Title] = useAtom(RecipeTitle);
    
    const navigate = useNavigate()

  const OnSubmit = () => {
    if (
      Ingredients.length == 0 ||
      Quantities.length == 0 ||
      Steps.includes("1. .\\\\") ||
      Title == ""
    ) {
      return console.log("Dude how");
    }
    axios
      .post(
        "https://localhost:7291/api/Recipes",
        {
          name: Title,
          steps: Steps,
          isPremium: false,
          imageLink:
            "https://static.vecteezy.com/system/resources/previews/008/660/558/original/organic-food-background-hand-drawn-concept-free-vector.jpg",
          ingredientIds: Ingredients,
          ingredientQuantity: Quantities,
        },
        { withCredentials: true }
      )
      .then((res) => {
        navigate("/User", { replace: true });
      });
  };

  return (
    <div>
      <button
        onClick={OnSubmit}
        className="px-4 py-2 bg-orange-500 rounded-full text-white font-medium shadow-lg hover:scale-105 hover:shadow-xl active:bg-orange-700 hover:bg-orange-400 active:shadow-lg duration-200"
      >
        <Trans i18nKey="description.recipe6"/>
      </button>
    </div>
  );
};

export default AddRecipeSubmit;
