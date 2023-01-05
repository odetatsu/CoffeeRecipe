import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RecipeInfoItem } from "./RecipeInfo";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import { motion } from "framer-motion";

const baseURL = process.env.REACT_APP_API + "/recipes/";
const UseRecipe = () => {
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
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <div>
          <ul className="recipe-detail-grid">
            <li>レシピ名:{recipe?.recipeName}</li>
            <li>珈琲豆:{recipe?.beansName}</li>
            <li>焙煎度:{recipe?.roastVal}</li>
            <li>
              酸味:{recipe?.acidity} 苦味:{recipe?.bitter} コク:{recipe?.rich}
            </li>
            <li>備考:{recipe?.remarks}</li>
          </ul>
        </div>
        </motion.div>

        <a href={"/userecipe/"+id+"/steps"}>
          <img
            className="footer-button fixed-bottom"
            src={window.location.origin + "/next.png"}
            width="64px"
            alt="next"
          />
        </a>
    </>
  );
};
export default UseRecipe;
