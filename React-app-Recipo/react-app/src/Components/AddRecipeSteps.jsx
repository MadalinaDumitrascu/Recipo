import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { RecipeSteps } from "../State";
import {  Trans } from 'react-i18next';

const AddRecipeSteps = () => {
    const [steps, setSteps] = useAtom(RecipeSteps);
    const [isDone, setDone] = useState(false)
  const [stepNumber, setStepNumber] = useState(1);
    const StepElements = document.querySelectorAll(".step");
    

  useEffect(() => {
    let stepString = "";
    StepElements.forEach((item, i) => {
      if (i == StepElements.length - 1) {
        stepString += i + 1 + ". " + item.value.trim() + ".";
      } else {
          stepString += i + 1 + ". " + item.value.trim() + "." + "\\\\";
      }
    });
    setSteps(stepString);
  }, [StepElements, isDone, stepNumber]);

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
    const updateSteps = () => {
        setDone(!isDone)
  }
  return (
    <div className="h-[45vh]">
      <div className="flex flex-col mt-7 gap-5">
        <h1 className="font-medium text-2xl"><Trans i18nKey="description.recipe4"/></h1>
        <div className="px-7 overflow-auto h-[20rem]">
          {Array.apply(0, Array(stepNumber)).map((x, i) => (
            <div key={i}>
              <p className="font-medium text-lg"><Trans i18nKey="description.recipe5"/> {i + 1}</p>
              <textarea
                name=""
                id=""
                cols="60"
                      rows="3"
                      onBlur={updateSteps}
                className="border-2 border-gray-300 rounded-xl p-2 outline-none resize-none step"
              ></textarea>
            </div>
          ))}
        </div>
          <div className="flex gap-3 items-center">
            <button
              onClick={IncreaseStepNumber}
              className="px-2 rounded-lg py-1 select-none bg-gray-300"
            >
              +
            </button>
            <button
              onClick={DecreaseStepNumber}
              className="px-3 rounded-lg py-1 select-none bg-gray-300"
            >
              -
            </button>
          </div>
      </div>
    </div>
  );
};

export default AddRecipeSteps;
