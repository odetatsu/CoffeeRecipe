import React from "react";
import { RecipeItem } from "./RecipeItem";
import Button from "react-bootstrap/Button";
import { Card, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setRecipeKey } from "../../Store/recipeSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";

const Recipe = ({ recipe }: { recipe: RecipeItem }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const clickCard = (event: React.MouseEvent<HTMLInputElement>) => {
    dispatch(setRecipeKey(recipe.recipeKey));
    navigate("/userecipe/" + recipe.recipeKey);
  };
  const postPreviewVariants = {
    initial: { x: "100%", opacity: 0 },
    enter: { x: 0, opacity: 1, duration: 1 },
    exit: { x: "-100%", opacity: 0, duration: 1, ease: "easeInOut" },
  };
  return (
    <motion.div
    transition={{
      duration: 0.2,
      ease: "easeInOut",
    }}
      whileHover={{
        scale: 1.07,
        transition: { duration: 0.2 },
      }}
      key={recipe.recipeKey}
    >
      <Card className="card" onClick={clickCard}>
        <Card.Header as="h5">{recipe.recipeName}</Card.Header>
        <Card.Body>
          <Card.Text>{recipe.recipeInfo}</Card.Text>
          <Card.Text>珈琲豆：{recipe.beansName}</Card.Text>
          <Card.Text>焙煎度：{recipe.roastVal}</Card.Text>
          <ButtonGroup>
            <Button variant="primary" className="">
              編集
            </Button>
            <Button variant="danger">削除</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default Recipe;
