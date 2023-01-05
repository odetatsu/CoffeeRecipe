import React from "react";
import Recipe from "./Recipe";
import { RecipeItem } from "./RecipeItem";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import { motion } from "framer-motion";
import "./style.css";

const baseURL = process.env.REACT_APP_API + "/recipes";

const RecipeList = () => {
  const [recipes, setRecipes] = useState<RecipeItem[]>([]);
  useEffect(() => {
    axios.get(baseURL).then((response: AxiosResponse<RecipeItem[]>) => {
      console.log(response.data);

      setRecipes(response.data);
    });
  }, []);
  return (
    <>
    <motion.div
      animate={{
        y: 0,
        opacity:1,
        scale:1
      }}
      initial={{
        y: "50%",
        opacity:0,
        scale:0.5

      }}
      exit={{
        x: "-50%",
        opacity:0,
        scale:0.5

      }}

      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      <div className="wrapper">
          {recipes.map((recipe) => (
            <Recipe recipe={recipe} key={recipe.recipeKey} />
          ))}
          </div>
        </motion.div>
      <a href="/">
        <img
          className="footer-button fixed-bottom"
          src="./plus.png"
          width="64px"
          alt="Home"
        />
      </a>
    </>
  );
};

export default RecipeList;
