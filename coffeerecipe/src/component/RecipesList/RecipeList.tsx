import React from "react";
import Recipe from "./Recipe";
import { RecipeItem } from "./RecipeItem";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import { motion } from "framer-motion";
import "./style.css";
import { useNavigate } from "react-router-dom";

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
  return (
    <>
      <motion.div
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        initial={{
          x: "50%",
          opacity: 0,
          scale: 0.5,
        }}
        exit={{
          x: "-50%",
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="recipelist-body">レシピ一覧</div>
        <div className="card-wrapper">
          {recipes.map((recipe) => (
            <Recipe recipe={recipe} key={recipe.recipeKey} />
          ))}
        </div>
      </motion.div>
      <motion.img
        animate={{
          scale: 1
        }}
        initial={{
          scale: 0,
        }}
        exit={{
          scale: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }} whileTap={{scale:0.5, transition: { duration: 0.1 },}}
        onClick={() => navigate("/addrecipe")}
          className="footer-button fixed-bottom"
          src={window.location.origin + "/plus.png"}
          alt="Add"
      />
    </>
  );
};

export default RecipeList;
