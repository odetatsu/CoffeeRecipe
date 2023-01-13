import React from "react";
import Recipe from "./Recipe";
import { RecipeItem } from "./RecipeItem";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect, useContext } from 'react';
import { motion } from "framer-motion";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { pageChangeMotion, clickButtonMotion } from '../../../App';

const baseURL = process.env.REACT_APP_API + "/recipes";

const RecipeList = () => {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState<RecipeItem[]>([]);
  useEffect(() => {
    axios.get(baseURL).then((response: AxiosResponse<RecipeItem[]>) => {
      console.log(response.data);

      setRecipes(response.data);
    });
  }, []);
  
  var variants = useContext(pageChangeMotion);
  var variantsClickButton = useContext(clickButtonMotion);

  return (
    <>
      <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
        <div className="recipelist-body">レシピ一覧</div>
        <div className="card-wrapper">
          {recipes.map((recipe) => (
            <Recipe recipe={recipe} key={recipe.recipeKey} />
          ))}
        </div>
      </motion.div>
      <motion.img variants={variantsClickButton} initial="initial" animate="animate" exit="exit" whileTap="whileTap"
        onClick={() => navigate("/addrecipe")}
          className="footer-button-right fixed-bottom"
          src={window.location.origin + "/plus.png"}
          alt="Add"
      />
    </>
  );
};

export default RecipeList;
