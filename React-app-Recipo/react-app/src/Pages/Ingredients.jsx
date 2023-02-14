import axios from 'axios'
import { useAtom } from 'jotai'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useParams, useNavigate } from 'react-router'
import IngredientsFilter from '../Components/IngredientsFilter'
import IngredientsSection from '../Components/IngredientsSection'
import PremiumAddRecipes from '../Components/PremiumAddRecipes'
import { SelectedIngredients } from '../State'
import { Trans } from 'react-i18next';

const Ingredients = () => {
  const FilterRef = useParams();

  const [filter, setFilter] = React.useState(FilterRef.id);
  const [search, setSearchFilter] = React.useState("");
  const [selectedIngredients, setSelectedIngredients] =
    useAtom(SelectedIngredients);
  localStorage.removeItem("ingredients");

  const navigate = useNavigate();
  React.useEffect(() => {
    axios
      .get("https://localhost:7291/api/Users/GetUser", {
        withCredentials: true,
      })
      .then((res) => {})
      .catch((reason) => {
        reason.response.status !== 200 && navigate("/Login");
      });
  }, []);

  const HandleCallback = (childData) => {
    setFilter(childData);
  };
  const SearchFilter = (e) => {
    setSearchFilter(e.target.value);
  };
  const GetRecipes = () => {
    localStorage.setItem("ingredients", JSON.stringify(selectedIngredients));
    navigate("/Recipes");
  };

  const HandleSelectedAmout = (childData) => {
    setSelectedIngredients(childData);
  };
  
  return (
    <div className="flex flex-col duration-200">
      <PremiumAddRecipes />
      <IngredientsFilter
        parentCallback={HandleCallback}
        FilterRef={FilterRef}
      />
      <div className="flex justify-center duration-300 flex-col items-center gap-5 lg:flex-row-reverse lg:justify-around p-5">
        <div className="border-gray-400 group duration-150 focus-within:border-gray-500 border-2 px-3 py-2 w-[80%] lg:w-[20rem] flex items-center rounded-full">
          <FaSearch size={15} className="text-gray-400 duration-150 group-focus-within:text-gray-700 mr-1" />
          <input
            className="px-2 w-full outline-none placeholder:duration-150 focus:placeholder:text-gray-300 autofill:hidden"
            placeholder="Search"
            onChange={SearchFilter}
            type="search"
          />
        </div>
        <div className={selectedIngredients.length > 1 ? 'visible' : 'invisible'}>
          <button onClick={GetRecipes} className='bg-orange-500 rounded-full shadow-md py-3 px-6 text-white hover:bg-orange-400 duration-150 active:bg-orange-700 font-medium '><Trans i18nKey="description.ingre0" /></button>
        </div>
      </div>
      <IngredientsSection
        ParentCallback={HandleSelectedAmout}
        filter={filter}
        search={search}
      />
    </div>
  );
};

export default Ingredients;
