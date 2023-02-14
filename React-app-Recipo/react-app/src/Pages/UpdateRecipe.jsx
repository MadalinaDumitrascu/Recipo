import React, { useState } from "react";
import AddRecipeProgressBar from "../Components/AddRecipeProgressBar";
import UpdateRecipeTitle from "../Components/UpdateRecipeTitle";
import UpdateRecipeIngredients from "../Components/UpdateRecipeIngredients";
import UpdateRecipeSteps from "../Components/UpdateRecipeSteps";
import { RecipeIngredientQuantities, RecipeIngredients, RecipeSteps, RecipeTitle } from "../State";
import { useAtom } from "jotai";
import UpdateRecipeImage from "../Components/UpdateRecipeImage";
import UpdateRecipeSubmit from "../Components/UpdateRecipeSubmit";
import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { Trans } from 'react-i18next';

const UpdateRecipe = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [title, setTitle] = useAtom(RecipeTitle);
  const [IngredientQuantities, setIngredientQuantities] = useAtom(RecipeIngredientQuantities);
  const [ingredientIds, setIngredientIds] = useAtom(RecipeIngredients)
  const [steps, setSteps] = useAtom(RecipeSteps);
  const Param = useParams();

  const IncreasePageNumber = () => {
    if (title.length > 3 && pageNumber == 0)
      pageNumber < 5 && setPageNumber(pageNumber + 1);
    else if (IngredientQuantities.length > 0 && pageNumber == 1)
      pageNumber < 5 && setPageNumber(pageNumber + 1);
    else if (steps.length > 5 && pageNumber == 2)
      pageNumber < 5 && setPageNumber(pageNumber + 1);
  };
  console.log(Param.id)
  useEffect(() => {
    axios.get(`https://localhost:7291/api/Recipes/${Param.id}`, { withCredentials: true }).then(res => {
      const recipe = res.data;
      console.log(recipe);
      setTitle(recipe.name);
      setSteps(recipe.steps);
      setIngredientQuantities(recipe.ingredientQuantity);
      setIngredientIds(recipe.ingredientIds)
    })
  }, [])

  return (
    <div className="justify-center flex bg-gray-300 ">
      <div className="w-[90%] h-[70vh] mx-80 my-20 rounded-2xl border-gray-300 bg-white flex flex-col items-center gap-16 justify-end">
        {/* <RecipeForm /> */}
        <div className="flex justify-center items-center">
          {pageNumber === 0 && <UpdateRecipeTitle />}
          {pageNumber === 1 && <UpdateRecipeIngredients />}
          {pageNumber === 2 && <UpdateRecipeSteps />}
          {pageNumber === 3 && <UpdateRecipeSubmit />}
        </div>
        <div className="flex flex-col items-center">
          <AddRecipeProgressBar pageNumber={pageNumber} />
          <div className="flex flex-row-reverse gap-5">
            <button
              onClick={IncreasePageNumber}
              className="bg-orange-500 my-10 text-white font-medium hover:bg-orange-400 active:bg-orange-700 duration-200 px-5 py-2 rounded-full"
            ><Trans i18nKey="description.update0" />

            </button>
            <button
              onClick={() => {
                setPageNumber(0);
              }}
              className="bg-orange-500 my-10 text-white font-medium hover:bg-orange-400 active:bg-orange-700 duration-200 px-5 py-2 rounded-full"
            ><Trans i18nKey="description.recipe1" />

            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRecipe;
