import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RecipeInfoItem } from "./RecipeInfo";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import { TimerApp } from "../StopWatch/Timer";

const baseURL = process.env.REACT_APP_API + "/recipes/";
const RecipeStep = () => {

  //const recipekey = useSelector((state: RootState) => state.recipe.recipeKey);
  const { id } = useParams();
  const [recipe, setRecipe] = useState<RecipeInfoItem>();
  useEffect(() => {
    console.log(window.location.origin);
    axios.get(baseURL + id).then((response: AxiosResponse<RecipeInfoItem>) => {
      setRecipe(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <>
      <TimerApp></TimerApp>
    </>
  );
};
export default RecipeStep;
