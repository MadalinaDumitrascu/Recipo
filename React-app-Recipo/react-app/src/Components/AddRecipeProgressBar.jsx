import React from "react";


const AddRecipeProgressBar = ({pageNumber}) => {
  


  let ProgressArray = [0, 0, 0, 0];
  for (let i = 0; i < ProgressArray.length; i++) {
    if (i <= pageNumber) {
      ProgressArray[i] = 1;
    }
  }
  return (
    <div className="flex gap-1">
      {ProgressArray.map((item, i) => {
        if (item === 1)
          return <div key={i} className="bg-orange-500 w-16 h-2"></div>;
        else return <div key={i} className="bg-gray-300 w-16 h-2"></div>;
      })}
      
    </div>
  );
};

export default AddRecipeProgressBar;
