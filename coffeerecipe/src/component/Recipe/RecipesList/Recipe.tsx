import React from "react";
import { RecipeItem } from "./RecipeItem";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";
import { setRecipeKey } from "../../../Store/recipeSlice";
import { Card } from 'react-bootstrap';
import { CardMotion } from '../../../App';
import { useContext } from 'react';

const Recipe = ({ recipe }: { recipe: RecipeItem }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const clickCard = (event: React.MouseEvent<HTMLInputElement>) => {
    dispatch(setRecipeKey(recipe.recipeKey));
    navigate("/userecipe/" + recipe.recipeKey);
  };

  var variants = useContext(CardMotion);

  return (
    <motion.div variants={variants} whileHover="whileHover" key={recipe.recipeKey}>
      <Card className="card" onClick={clickCard}>
        <Card.Header as="h5">{recipe.recipeName}</Card.Header>
        <Card.Body>
          <Card.Text>{recipe.recipeInfo}</Card.Text>
          <Card.Text>素材名：{recipe.beansName}</Card.Text>
          <Card.Text>焙煎度：{recipe.roastVal}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default Recipe;
