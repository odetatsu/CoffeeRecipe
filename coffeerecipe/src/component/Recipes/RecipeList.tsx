import React from "react";
import Recipe from "./Recipe";
import { RecipeItem } from "./RecipeItem";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

const baseURL = "recipes?name=User";

const RecipeList = () => {
  const [recipes, setRecipes] = useState<RecipeItem[]>([]);
  useEffect(() => {
    const getUser = async () => {
      axios.get(baseURL).then((response: AxiosResponse<RecipeItem[]>) => {
        console.log(response.data);

        setRecipes(response.data);
      });
    };
    getUser();
  }, []);

  return (
      <li className="justify-content-center">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.recipe_KEY} />
        ))}
      </li>
  );
};

export default RecipeList;
