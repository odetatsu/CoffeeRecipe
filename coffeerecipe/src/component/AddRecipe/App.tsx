import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { RecipeItem } from "../RecipesList/RecipeItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";

const baseURL = "recipeInfo";
export const AddRecipe = () => {
  const recipekey = useSelector((state: RootState) => state.recipe.recipeKey);

  useEffect(() => {
    console.log(recipekey);
    axios
      .get(baseURL, {
        params: {
          recipeKey: recipekey,
        },
      })
      .then((response: AxiosResponse<RecipeItem[]>) => {
        console.log(response.data);
      });
  }, []);
  return <div></div>;
};
