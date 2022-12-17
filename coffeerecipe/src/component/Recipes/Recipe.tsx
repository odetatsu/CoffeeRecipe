import React from "react";
import { RecipeItem } from "./RecipeItem";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

const Recipe = ({ recipe }: { recipe: RecipeItem }) => {
  return (
    <Card>
      <Card.Header as="h5">{recipe.recipe_NAME}</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Recipe;
