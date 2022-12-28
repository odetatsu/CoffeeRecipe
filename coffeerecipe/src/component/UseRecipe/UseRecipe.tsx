import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { RecipeInfoItem } from "./RecipeInfo";
import { RecipeOrder } from './RecipeOrder';

const baseURL = "https://gu8oy6c562.execute-api.ap-northeast-1.amazonaws.com/recipes/";
const UseRecipe = () => {
  const recipekey = useSelector((state: RootState) => state.recipe.recipeKey);

  const [recipe, setRecipe] = useState<RecipeInfoItem>();
  useEffect(() => {
    console.log(recipekey);
    axios
      .get(baseURL + recipekey)
      .then((response: AxiosResponse<RecipeInfoItem>) => {
        setRecipe(response.data);
        console.log(response.data);
      });
  }, []);
  return (
    <>
      {recipe?.recipeOrder.map((info) => (
        <div>{info.minutes_DATE}</div>)
      )}
    </>
  );
};
export default UseRecipe;
