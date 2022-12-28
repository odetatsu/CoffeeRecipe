import React from "react";
import Recipe from "./Recipe";
import { RecipeItem } from "./RecipeItem";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import { motion } from 'framer-motion';

const baseURL = process.env.REACT_APP_API + "/recipes";

const RecipeList = () => {

  const [recipes, setRecipes] = useState<RecipeItem[]>([]);
  useEffect(() => {
    axios.get(baseURL).then((response: AxiosResponse<RecipeItem[]>) => {
      console.log(response.data);

      setRecipes(response.data);
    });
  }, []);
  const blogVariants = {
    enter: { transition: { staggerChildren: 0.1 },duration: 0.5, ease: "easeInOut" },
    exit: { transition: { staggerChildren: 0.1 } ,duration: 0.5, ease: "easeInOut"}
  };
  return (
      <motion.div
        className="blog-list"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={blogVariants}
      >
      <CardGroup className="justify-content-center">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.recipe_KEY} />
        ))}
      </CardGroup>
      </motion.div>
  );
};

export default RecipeList;