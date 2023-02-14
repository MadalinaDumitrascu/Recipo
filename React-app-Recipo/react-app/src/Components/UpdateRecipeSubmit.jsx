import axios from "axios";
import { useAtom } from "jotai";
import React from "react";
import { useNavigate, useParams } from "react-router";
import {
  RecipeIngredientQuantities,
  RecipeIngredients,
  RecipeSteps,
  RecipeTitle,
} from "../State";
import { Trans } from 'react-i18next';

const UpdateRecipeSubmit = () => {
  const [Ingredients] = useAtom(RecipeIngredients);
  const [Quantities] = useAtom(RecipeIngredientQuantities);
  const [Steps] = useAtom(RecipeSteps);
    const [Title] = useAtom(RecipeTitle);
    const Param = useParams()
    const navigate = useNavigate()

  const OnSubmit = () => {
    if (
      Ingredients.length == 0 ||
      Quantities.length == 0 ||
      Steps.includes("1. .\\\\") ||
      Title == ""
    ) {
      return console.log("Dude wtf");
    }
    axios
      .put(
        `https://localhost:7291/api/Recipes/${Param.id}`,
        {
          id: Param.id,
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
        console.log(res);
        navigate("/Dashboard", { replace: true });
      });
  };

  return (
    <div>
      <button
        onClick={OnSubmit}
        className="px-4 py-2 bg-orange-500 rounded-full text-white font-medium shadow-lg hover:scale-105 hover:shadow-xl active:bg-orange-700 hover:bg-orange-400 active:shadow-lg duration-200"
      ><Trans i18nKey="description.submit0" />
        
      </button>
    </div>
  );
};

export default UpdateRecipeSubmit;
