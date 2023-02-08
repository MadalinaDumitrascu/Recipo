import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import PremiumAd from "../Components/PremiumAd";
import PremiumAddRecipes from "../Components/PremiumAddRecipes";
import RecipePageCard from "../Components/RecipePageCard";
import UserRecipe from "../Components/UserRecipe";
import { Trans } from 'react-i18next';

const UserPage = () => {
  const [username, setUsername] = React.useState("");
  const [userRole, setUserRole] = React.useState([]);
  const [isPremium, setPremium] = React.useState();
  const [favorites, setFavorites] = React.useState([]);
  const [email, setEmail] = React.useState();
  const [userRecipes, setUserRecipes] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get("https://localhost:7291/api/Users/GetUser", {
        withCredentials: true,
      })
      .then((res) => {
        setUsername(res.data.username);
        setUserRole(res.data.roles);
        setEmail(res.data.emailAddress);
        setPremium(res.data.roles.includes("SubscribedUser"));
      })
      .catch((reason) => reason.response.status === 401 && navigate("/Login"));
  }, []);
  React.useEffect(() => {
    axios
      .get("https://localhost:7291/Favorites", { withCredentials: true })
      .then((res) => {
        setFavorites(res.data.data);
      });
    axios
      .get("https://localhost:7291/api/Recipes/User-Recipes", {
        withCredentials: true,
      })
      .then((res) => setUserRecipes(res.data.data));
  }, []);

  return (
    <div className="flex flex-col">
      {isPremium ? <PremiumAddRecipes /> : <PremiumAd />}
      <div className="p-10 font-thin text-3xl border-b-2 border-b-gray-300 mx-4">
        <h1 className="mx-10">
          {username.charAt(0).toUpperCase().concat(username.substring(1))}'s
          Details
        </h1>
      </div>
      <div className="flex flex-col items-center gap-0">
        <div className="flex flex-col px-5 py-10 w-[70%] shadow-lg border justify-start rounded-xl border-gray-300 m-10 gap-5">
          <p className="text-lg font-medium">
            Subscription:{" "}
            <span
              className={
                userRole.includes("SubscribedUser")
                  ? "font-normal text-emerald-600"
                  : "font-normal"
              }
            >
              {userRole.includes("SubscribedUser")
                ? "Premium Plan"
                : "Standard Plan"}
            </span>
          </p>
          <p className="text-lg font-medium"><Trans i18nKey="description.user0" /><span className="font-normal">{username}</span></p>
          <p className="text-lg font-medium"><Trans i18nKey="description.user1" /><span className="font-normal">{email}</span></p>

          {!isPremium ? (
            favorites.filter((item) => item.isPremium == false).length > 0 ? (
              <>
                <div className="flex flex-col"><h1 className="text-xl"><Trans i18nKey="description.user2" /></h1></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 mt-10 justify-evenly items-center ">
                  {favorites
                    .filter((item) => item.isPremium == false)
                    .map((item) => (
                      <RecipePageCard
                        Favorite={item.favorite}
                        title={item.name}
                        image={item.imageLink}
                        steps={item.steps}
                        isPremium={item.isPremium}
                        User={isPremium}
                        Id={item.id}
                      />
                    ))}
                </div>
              </>
            ) : null
          ) : favorites.length > 0 ? (
            <>
              <div className="flex flex-col">
                <h1 className="text-xl"><Trans i18nKey="description.user2" /></h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 mt-10 justify-evenly items-center ">
                {favorites.map((item) => (
                  <RecipePageCard
                    Favorite={item.favorite}
                    title={item.name}
                    image={item.imageLink}
                    steps={item.steps}
                    isPremium={item.isPremium}
                    User={isPremium}
                    Id={item.id}
                  />
                ))}
              </div>
            </>
          ) : null}

          {isPremium ? userRecipes.length == 0 ? null : (
            <>
              <div className="flex flex-col">
                <h1 className="text-xl"><Trans i18nKey="description.user3" /></h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 mt-10 justify-evenly items-center ">
                {userRecipes.map((item) => {
                  console.log(item)
                  return (
                    <UserRecipe
                      Id={item.id}
                      image={item.imageLink}
                      steps={item.steps}
                      title={item.name}
                    />
                  )
                })}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
