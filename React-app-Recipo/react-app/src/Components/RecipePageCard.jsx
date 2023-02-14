import axios from "axios";
import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoMdStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const RecipePageCard = ({
  title,
  image,
  steps,
  isPremium,
  Id,
  Favorite,
  User,
}) => {
  const [favorite, setFavorite] = React.useState(Favorite);
  const navigate = useNavigate();
  const RecipeSteps = steps.split("\\\\");
  const toggleHeart = () => {
    favorite == false
      ? axios
          .get(`https://localhost:7291/api/Favorites/${Id}`, {
            withCredentials: true,
          })
          .then((res) => {})
      : axios
          .delete(`https://localhost:7291/api/Favorites/${Id}`, {
            withCredentials: true,
          })
          .then(res => {});
    setFavorite(!favorite);
  };
  const ToRecipe = (e) => {
    navigate(`/Recipes/${Id}`);
  };
  return (
    <div
      className={
        isPremium
          ? "flex flex-col border-2 border-emerald-500 hover:shadow-lg active:shadow-md shadow rounded-xl select-none relative w-[400px] h-[500px] hover:scale-[1.03] active:scale-[1.02] p-3 duration-300"
          : "flex flex-col hover:shadow-lg shadow active:shadow-md border-2 border-gray-300 rounded-xl select-none relative w-[400px] h-[500px] hover:scale-[1.07] active:scale-[1.02] p-3 duration-300"
      }
      key={Id}
    >
      <div
        onClick={ToRecipe}
        className="bg-gradient-to-b rounded-xl z-[11] from-transparent via-transparent to-white/90 absolute w-[90%] h-[97%]"
      ></div>
      <div className="flex justify-center">
        {!User & isPremium ? (
          <div>
            <IoMdStar
              size={30}
              className="z-[12] absolute text-emerald-600 drop-shadow-md m-2 "
            />
          </div>
        ) : (
          <div className="">
            {!favorite ? (
              <AiOutlineHeart
                size={30}
                onClick={toggleHeart}
                className="active:text-red-400 drop-shadow-md absolute mx-2 my-2 text-white hover:scale-125 z-[12] active:scale-110 duration-500"
              />
            ) : (
              <AiFillHeart
                size={30}
                onClick={toggleHeart}
                className="active:text-red-400 drop-shadow-md absolute mx-2 my-2 text-white hover:scale-125 z-[12] active:scale-110 duration-500"
              />
            )}
          </div>
        )}
        {!User & isPremium ? (
          <div className="w-[350px] h-[250px] bg-white/70 border border-gray-200 z-10 absolute rounded-xl"></div>
        ) : null}
        <img
          src={image}
          alt=""
          className="w-[350px] h-[250px] border border-gray-200 rounded-xl"
        />
      </div>
      <div className="p-5">
        <h1 className="text-2xl flex items-center gap-2 font-thin">{title}</h1>
      </div>
      <div className="p-5 flex flex-col gap-2 overflow-hidden">
        {RecipeSteps.map((item) => (
          <div className="mb-3">
            <h1 className="font-medium text-lg mb-2">
              Step {item.substring(0, 1)}
            </h1>
            <p className="font-medium">{item.substring(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipePageCard;
