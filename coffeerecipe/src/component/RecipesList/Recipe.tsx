import React from "react";
import { RecipeItem } from "./RecipeItem";
import Button from "react-bootstrap/Button";
import { Card, ButtonGroup } from "react-bootstrap";
import "./styles.css";
import { useDispatch } from "react-redux";
import { setRecipeKey } from "../../Store/recipeSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Recipe = ({ recipe }: { recipe: RecipeItem }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const clickCard = (event: React.MouseEvent<HTMLInputElement>) => {
    dispatch(setRecipeKey(recipe.recipe_KEY));
    navigate("/userecipe");
  };
  const postPreviewVariants = {
    initial: { x: "100%", opacity: 0 },
    enter: { x: 0, opacity: 1, duration: 0.5, ease: "easeInOut" },
    exit: { x: "-100%", opacity: 0, duration: 0.5, ease: "easeInOut" }
  };
  return (
    <Card className="card" onClick={clickCard}>
      <Card.Header as="h5">{recipe.recipe_NAME}</Card.Header>
      <Card.Body>
        <Card.Text>{recipe.recipe_INFO}</Card.Text>
        <ButtonGroup>
          <Button variant="primary" className="">
            編集
          </Button>
          <Button variant="danger">削除</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default Recipe;
