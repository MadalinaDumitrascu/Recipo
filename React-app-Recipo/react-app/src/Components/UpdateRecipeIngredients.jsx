import axios from "axios";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { useState } from "react";
import { Hint } from "react-autocomplete-hint";
import { IoIosRemoveCircle } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { RecipeIngredientQuantities, RecipeIngredients } from "../State";
import { Trans } from 'react-i18next';

const UpdateRecipeIngredients = () => {
  const [rIngredients, setIds] = useAtom(RecipeIngredients);
  const [rQuantities, setQuantities] = useAtom(RecipeIngredientQuantities);
  const [ingredients, setIngredients] = useState([]);
  const [IngredientQuantities, setIngredientQuantities] = useState([]);
  const [IngredientIds, setIngredientIds] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  console.log(selectedIngredients)
  useEffect(() => {
    setIngredientIds(rIngredients);
    setIngredientQuantities(rQuantities);
    IngredientIds.forEach((e, i) => {
      if (i == 0) {
        setSelectedIngredients([ingredients.filter((i) => e == i.id)[0]]);
      } else {
        setSelectedIngredients((prev) => {
          return [...prev, ingredients.filter((i) => e == i.id)[0]];
        });
      }
    });
    QuantitySetter();
    console.log(rQuantities, rIngredients);
  }, [ingredients]);

  const updateSpan = () => {
    console.log(selectedIngredients);
    setQuantities(IngredientQuantities);
    setIds(IngredientQuantities.map((item) => item.ingredientId));
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
      QuantitySetter();
    }
  };

  useEffect(() => {
    axios
      .get("https://localhost:7291/api/Ingredients", {
        withCredentials: true,
      })
      .then((res) => {
        setIngredients(res.data);
      });
  }, []);

  const Convert = (/** @type string*/ text) =>
    text
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/gim, "-");

  const RemoveIngredient = (e) => {
    setSelectedIngredients(
      selectedIngredients.filter(
        (item) => item.id.toString() !== e.target.parentNode.dataset.ingredient
      )
    );
    updateSpan();
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="mx-5 border-2 rounded-xl h-full w-[28rem] p-5 border-gray-300">
        <div className="py-2 border-b-2 border-b-gray-300 mb-2">
          <h1 className="text-2xl text-center font-medium "><Trans i18nKey="description.premium10" /></h1>
        </div>
        <div className="flex h-[14rem] flex-col mt-7 w-full overflow-auto gap-3 mx-3">
          {selectedIngredients.map((item) => (
            <div
              className="flex border-b group border-b-gray-200 duration-150  justify-between items-center"
              key={item.id}
            >
              <p className="text-lg py-2 cursor-default font-medium">
                {item.name} -{" "}
                <span
                  contentEditable
                  id={Convert(item.name)}
                  className="px-1 outline-none cursor-pointer hover:bg-gray-200 focus:outline-gray-300 rounded-lg duration-300 quantity-span whitespace-nowrap"
                  onBlur={updateSpan}
                >
                  10
                </span>{" "}
                <select
                  className="focus:outline-gray-300 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg"
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
                className="mx-7 cursor-pointer hover:scale-[1.20] will-change-auto group-hover:visible group-hover:duration-200 invisible text-gray-300 hover:text-red-500"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="border-2 duration-300 rounded-full group focus-within:border-gray-500 items-center flex border-gray-300">
        <AiOutlineSearch
          className="ml-2 text-gray-400 pointer-events-none group-focus-within:text-gray-700"
          size={23}
        />
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
            className="outline-none duration-300  group-focus-within:placeholder:text-gray-300 rounded-full w-[29rem] px-3 py-1"
          />
        </Hint>
      </div>
    </div>
  );
};

export default UpdateRecipeIngredients;
