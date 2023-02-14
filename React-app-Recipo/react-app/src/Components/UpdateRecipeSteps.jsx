import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { RecipeSteps } from "../State";
import { Trans } from 'react-i18next';

const UpdateRecipeSteps = () => {
  const [steps, setSteps] = useAtom(RecipeSteps);
  const [StepArray, setStepArray] = useState([]);
  const [isDone, setDone] = useState(false);
  const [isDone2, setDone2] = useState(false);
  const [ArrayCreated, setCreated] = useState(false);
  const [stepNumber, setStepNumber] = useState(1);
  const StepElements = document.querySelectorAll(".step");
  console.log({
    Elements: StepElements,
    Steps: steps,
    StepArray: StepArray,
    StepNumber: stepNumber,
  });

  useEffect(() => {
    if (ArrayCreated === false) {
      const myArray = steps
        .split("\\\\")
        .map((e, i) => e.replace(i + 1 + `. `, "").slice(0, -1));
      setStepArray(myArray);
      setStepNumber(myArray.length);
      setCreated(true);
      console.log({
        stepString: steps,
        SplitArray: myArray,
      });
    }
  }, [steps]);

  useEffect(() => {
    if (ArrayCreated === true) {
      StepElements.forEach((item, i) => {
        item.value = StepArray[i];
      });
      updateSteps();
      setDone(true);
    }
  }, [StepArray, ArrayCreated, steps]);

  useEffect(() => {
    if (isDone && ArrayCreated) {
      setCreated("no");
      setDone("no");
    }
  }, [StepElements]);

  const DecreaseStepNumber = () => {
    if (stepNumber > 1) {
      setStepNumber(stepNumber - 1);
      console.log(steps);
    } else setStepNumber(1);
    console.log(stepNumber);
  };

  const IncreaseStepNumber = () => {
    console.log(stepNumber);
    if (stepNumber >= 1 && stepNumber < 8) {
      setStepNumber(stepNumber + 1);
      console.log(steps);
    }
    console.log(stepNumber);
  };

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
    console.log(steps);
  }, [StepElements, isDone2, stepNumber]);

  const updateSteps = () => {
    setDone2(!isDone2);
    console.log(steps);
  };
  return (
    <div className="h-[45vh]">
      <div className="flex flex-col mt-7 gap-5">
        <h1 className="font-medium text-2xl"><Trans i18nKey="description.premium11" /></h1>
        <div className="px-7 overflow-auto h-[20rem]">
          {Array.apply(0, Array(stepNumber)).map((x, i) => (
            <div key={i}>
              <p className="font-medium text-lg"><Trans i18nKey="description.premium12" />{i + 1}</p>
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

export default UpdateRecipeSteps;
