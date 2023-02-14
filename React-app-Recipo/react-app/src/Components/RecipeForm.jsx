import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Hint } from "react-autocomplete-hint";
import { IoIosRemoveCircle } from "react-icons/io";
import { Trans } from 'react-i18next';

const RecipeForm = () => {
  const [stepNumber, setStepNumber] = useState(1);
  const [steps, setSteps] = useState("");
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [IngredientQuantities, setIngredientQuantities] = useState([]);
  const [IngredientIds, setIngredientIds] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const StepElements = document.querySelectorAll(".step");
  const updateSpan = () => {
    QuantitySetter();
  };
  const QuantitySetter = () => {
    selectedIngredients.forEach((item, i) => {
      if (i == 0) {
        setIngredientQuantities([
          {
            ingredientId: item.id,
            quantity: parseInt(
              document.querySelectorAll(`#${Convert(item.name)}`)[0].innerText
            ),
            quantityType: document.querySelectorAll(
              `#${Convert(item.name)}2`
            )[0].value,
          },
        ]);
      } else {
        setIngredientQuantities((prev) => {
          const quantity = document.querySelectorAll(
            `#${Convert(item.name)}`
          )[0].innerText;
          const quantityType = document.querySelectorAll(
            `#${Convert(item.name)}2`
          )[0].value;
          return [
            ...prev,
            {
              ingredientId: item.id,
              quantity: parseInt(quantity),
              quantityType: quantityType,
            },
          ];
        });
      }
    });
  };
  const AddIngredientToList = (e) => {
    if (e.code == "Enter") {
      const ingredient = ingredients.filter(
        (item) => item.name.toLowerCase() === e.target.value.toLowerCase()
      )[0];
      console.log(
        selectedIngredients,
        selectedIngredients.includes(ingredient)
      );
      if (selectedIngredients.includes(ingredient)) {
        return "";
      } else if (ingredient == null) {
        console.log(e.target.value);
      } else {
        selectedIngredients.length > 0
          ? setSelectedIngredients((prev) => {
            return [...prev, ingredient];
          })
          : setSelectedIngredients([ingredient]);
      }
    }
    console.log(selectedIngredients);
  };

  useEffect(() => {
    axios
      .get("https://localhost:7291/api/Ingredients", { withCredentials: true })
      .then((res) => {
        setIngredients(res.data);
      });
  }, []);

  const Convert = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-zA-Z0-9]+/gim, "-");

  const DecreaseStepNumber = () => {
    if (stepNumber > 1) {
      setStepNumber(stepNumber - 1);
    } else setStepNumber(1);
  };

  const IncreaseStepNumber = () => {
    if (stepNumber >= 1 && stepNumber < 8) {
      setStepNumber(stepNumber + 1);
    }
  };

  useEffect(() => {
    QuantitySetter();
    console.log(IngredientQuantities);
  }, [selectedIngredients]);

  useEffect(() => {
    setIngredientIds(IngredientQuantities.map((item) => item.ingredientId));
    console.log(IngredientIds);
  }, [IngredientQuantities]);

  useEffect(() => {
    let stepString = "";
    StepElements.forEach((item, i) => {
      if (i == StepElements.length - 1) {
        stepString += i + 1 + ". " + item.value + ".";
      }
      stepString += i + 1 + ". " + item.value + "." + "\\\\";
    });
    setSteps(stepString);
    console.log(steps);
  }, [StepElements.values]);

  const SubmitRecipe = () => {
    const title = document.querySelector("#Title").value.trim();
    console.log(title);
    console.log(IngredientQuantities);
    setRecipe({
      name: title,
      steps: steps,
      imageLink: "",
      ingredientIds: IngredientIds,
      ingredientQuantity: IngredientQuantities,
    });
    //   axios
    //     .post("https://localhost:7291/api/Recipes", recipe, {
    //       withCredentials: true,
    //     })
    //     .then((res) => console.log(res));
  };

  const RemoveIngredient = (e) => {
    console.log(e.target.parentNode.dataset.ingredient);
    setSelectedIngredients(
      selectedIngredients.filter(
        (item) => item.id.toString() !== e.target.parentNode.dataset.ingredient
      )
    );
    updateSpan()
    console.log(selectedIngredients);
  };

  return (
    <div>
      <div>
        <div className="mx-10 px-5 py-7 text-2xl font-thin border-b-2 border-b-gray-300">
          <h1><Trans i18nKey="description.premium5" /></h1>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <label className="font-medium text-lg" htmlFor="Title">
            <Trans i18nKey="description.premium9" />
          </label>
          <input
            type="text"
            id="Title"
            className="border-2 border-gray-300 px-3 py-1 w-[29rem] rounded-full outline-none"
          />
        </div>
        <div className="flex py-10 justify-evenly gap-10 mt-10 px-16">
          <div className="flex flex-col gap-8">
            <div className="mx-5 border-2 rounded-xl h-full w-[28rem] p-5 border-gray-300">
              <div className="py-2 border-b-2 border-b-gray-300 mb-2">
                <h1 className="text-2xl text-center font-medium ">
                  <Trans i18nKey="description.premium10" />
                </h1>
              </div>
              <div className="flex flex-col mt-7 w-full gap-3 mx-3">
                {selectedIngredients?.map((item) => (
                  <div
                    className="flex border-b border-b-gray-200 justify-between items-center"
                    key={item.id}
                  >
                    <p className="text-lg  py-2 font-medium">
                      {item.name} -{" "}
                      <span
                        contentEditable
                        id={Convert(item.name)}
                        className="px-1 outline-none focus:outline-gray-300 rounded-lg duration-300 quantity-span whitespace-nowrap"
                        onBlur={updateSpan}
                      >
                        10
                      </span>{" "}
                      <select
                        className="focus:outline-gray-300 duration-300 rounded-lg"
                        name="quantity"
                        id={Convert(item.name) + "2"}
                        onChange={updateSpan}
                      >
                        <option value="g">g</option>
                        <option value="ml">ml</option>
                        <option value="pc">pc</option>
                      </select>{" "}
                    </p>
                    <IoIosRemoveCircle
                      size={20}
                      data-ingredient={item.id}
                      onClick={RemoveIngredient}
                      className="mx-7 hover:scale-[1.20] text-gray-300 hover:text-red-500 duration-200"
                    />
                  </div>
                ))}
              </div>
            </div>
            <Hint
              options={Array.apply(
                0,
                ingredients.map((item) => item.name)
              )}
              allowTabFill={true}
            >
              <input
                type="search"
                placeholder="Search"
                onKeyDown={AddIngredientToList}
                className="outline-none mx-3 w-[29rem] border-2 border-gray-300 rounded-full px-3 py-1"
              />
            </Hint>
          </div>
          <div className="flex flex-col mt-7 gap-5">
            <h1 className="font-medium text-2xl"><Trans i18nKey="description.premium11" /></h1>
            <div className="px-7">
              {Array.apply(0, Array(stepNumber)).map((x, i) => (
                <div key={i}>
                  <p className="font-medium text-lg"><Trans i18nKey="description.premium12" /> {i + 1}</p>
                  <textarea
                    name=""
                    id=""
                    cols="60"
                    rows="3"
                    className="border-2 border-gray-300 rounded-xl p-2 outline-none resize-none step"
                  ></textarea>
                </div>
              ))}
              <div className="flex gap-3 items-center">
                <button
                  onClick={IncreaseStepNumber}
                  className="px-2 rounded-lg py-1 bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={DecreaseStepNumber}
                  className="px-3 rounded-lg py-1 bg-gray-300"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={SubmitRecipe}
        className="p-3 bg-gray-300 hover:bg-gray-200"
      >
        click me!
      </button>
    </div>
  );
};

export default RecipeForm;
