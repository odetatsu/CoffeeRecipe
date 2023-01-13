import axios, { AxiosResponse } from "axios";
import { useEffect, useState, useContext } from 'react';
import { useParams } from "react-router";
import { RecipeInfoItem } from "./RecipeInfo";
import "./styles.css";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DeleteCancelDialog from '../../Utility/Dialog/DeleteCancelDialog';
import NumberInputOverlay from '../../Utility/NumberInput/NumberInputOverlay';
import { clickButtonMotion, pageChangeMotion } from '../../../App';

const baseURL = process.env.REACT_APP_API + "/recipes/";
const UseRecipe = () => {
  const [dripAmount, setDripAmout] = useState(0);
  const [numList, setNumList] = useState<number[]>([0,0,0,0]);
  useEffect(() => {
    let sum:number = 0;
    numList.forEach((value,index)=>{sum+=(value * (10 ** index))});
    console.log("sum"+sum);
    setDripAmout(sum);
  }, [numList]);
  const navigate = useNavigate();
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

  const ModifyButtonClick = () => {
    setModalShow(true);
    return;

  };

  const [isDelete, setIsDelete] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const DeleteButtonClick = () => {
    setModalShow(true);
    return;

  };

  useEffect(() => {
    if(!isDelete)return;
    console.log("delete");
    axios.delete(baseURL + id).then(() => {
      navigate("/" )
    });
  }, [isDelete]);
  
  var variantsClickButton = useContext(clickButtonMotion);
  var variants = useContext(pageChangeMotion);
  return (
    <>
     <DeleteCancelDialog isshow={modalShow} onHideFunc={() => setModalShow(false)} title={"コーヒ情報"} message={"削除してもよろしいでしょうか？"} callBackSetState={setIsDelete}/>

     <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
        <div className="recipe-detail-grid">
          <ul>
            <li>レシピ名:{recipe?.recipeName}</li>
            <li>素材名:{recipe?.beansName}</li>
            <li>焙煎度:{recipe?.roastVal}</li>
            <li>
              酸味:{recipe?.acidity} 苦味:{recipe?.bitter} コク:{recipe?.rich}
            </li>
            <li>備考:{recipe?.remarks}</li>
            <li>
              素材量：
              {Math.round(
                ((Number(recipe?.dripRatio) * dripAmount) / 100) * 10
              ) / 10}
              g
            </li>
            <li>⇑</li>
            <li>
              ドリップ量:{dripAmount}ml
              <NumberInputOverlay numList={numList} callbackNumList={setNumList} />
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.img variants={variantsClickButton} initial="initial" animate="animate" exit="exit" whileTap="whileTap"
        onClick={() =>
          navigate("/userecipe/" + id + "/steps", {
            state: { totalAmount: dripAmount },
          })
        }
        className="footer-button-right fixed-bottom"
        src={window.location.origin + "/next.png"}
        alt="Add"
      />
      <motion.img variants={variantsClickButton} initial="initial" animate="animate" exit="exit" whileTap="whileTap"
          className="footer-button-center fixed-bottom"
          src={window.location.origin + "/modify.png"}
          alt="modify"
          onClick={ModifyButtonClick}
      />
      <motion.img variants={variantsClickButton} initial="initial" animate="animate" exit="exit" whileTap="whileTap"
          className="footer-button-left fixed-bottom"
          src={window.location.origin + "/delete.png"}
          alt="delete"
          onClick={DeleteButtonClick}
      />
    </>
  );
};
export default UseRecipe;
