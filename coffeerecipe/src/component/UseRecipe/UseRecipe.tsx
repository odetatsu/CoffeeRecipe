import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RecipeInfoItem } from "./RecipeInfo";
import "./styles.css";
import { motion, useAnimation } from "framer-motion";
import NumberInputApp from "../NumberInput/NumberInputApp";
import { useNavigate } from "react-router-dom";
import { useSelector, RootState } from "../../Store/store";
import { OverlayTrigger, Popover } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const baseURL = process.env.REACT_APP_API + "/recipes/";
const UseRecipe = () => {
  const [dripAmount, setDripAmout] = useState(0);
  const num1 = useSelector((state: RootState) => state.numberInput.num1);
  const num2 = useSelector((state: RootState) => state.numberInput.num2);
  const num3 = useSelector((state: RootState) => state.numberInput.num3);
  const num4 = useSelector((state: RootState) => state.numberInput.num4);
  useEffect(() => {
    const sum = num4 * 1000 + num3 * 100 + num2 * 10 + num1;
    console.log(sum);
    setDripAmout(sum);
  }, [num1, num2, num3, num4]);
  const navigate = useNavigate();
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
  const box2Control = useAnimation();
  box2Control.start({
    width: 200,
    transition: {
      duration: 3
    }
  });

  console.log(Math.round(((Number(recipe?.dripRatio) * dripAmount) / 100)*10)/10);
  return (
    <>
      <motion.div
        animate={{ x: 0, opacity: 1, scale: 1 }}
        initial={{ x: "50%", opacity: 0, scale: 0.5 }}
        exit={{ x: "-50%", opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="recipe-detail-grid">
          <ul>
            <li>レシピ名:{recipe?.recipeName}</li>
            <li>珈琲豆:{recipe?.beansName}</li>
            <li>焙煎度:{recipe?.roastVal}</li>
            <li>
              酸味:{recipe?.acidity} 苦味:{recipe?.bitter} コク:{recipe?.rich}
            </li>
            <li>備考:{recipe?.remarks}</li>
            <li>
              珈琲豆量：
              {Math.round(
                ((Number(recipe?.dripRatio) * dripAmount) / 100) * 10
              ) / 10}
              g
            </li>
            <li>⇑</li>
            <li>
              ドリップ量:{dripAmount}ml
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Body>
                      <NumberInputApp />
                    </Popover.Body>
                  </Popover>
                }
              >

                <motion.img
                  whileTap={{ scale:0.5, transition: { duration: 0.1 } }}width="32px"
                  src={window.location.origin + "/numberinput.png"}
                  alt="submit"
                />
              </OverlayTrigger>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.img
        animate={{
          scale: 1,
        }}
        initial={{
          scale: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        whileTap={{ scale: 0.5, transition: { duration: 0.1 } }}
        onClick={() =>
          navigate("/userecipe/" + id + "/steps", {
            state: { totalAmount: dripAmount },
          })
        }
        className="footer-button fixed-bottom"
        src={window.location.origin + "/next.png"}
        alt="Add"
      />
    </>
  );
};
export default UseRecipe;
