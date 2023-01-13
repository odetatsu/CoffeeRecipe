import { useState, useRef, useContext } from 'react';
import "./styles.css";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { AddRecipeInfoItem } from './AddRecipeInfoItem';
import NumberInputOverlay from '../../Utility/NumberInput/NumberInputOverlay';
import SelectBeans from '../../Utility/SelectBeans/App';
import Scalebar from '../../Utility/Scalebar/Scalebar';
import { clickButtonMotion } from '../../../App';


const AddRecipe = () => {
  const [rich, setRich] = useState(1);
  const [bitter, setBitter] = useState(1);
  const [acidity, setAcidity] = useState(1);
  const [selectBeansKey, setSelectBeansKey] = useState(0);
  const navigate = useNavigate();
  const [dripRatioNumList,setDripRatioNumList] = useState<number[]>([0,0]);


  const NextButtonClick = () => {
    const dripRatio = dripRatioNumList[1]*10+dripRatioNumList[0];
    const info:AddRecipeInfoItem ={
      name:recipeNameref.current?.value,
      info:recipeInforef.current?.value,
      beansKey:selectBeansKey,
      acidity:acidity,
      bitter:bitter,
      rich:rich,
      dripRatio:dripRatio
  } as AddRecipeInfoItem;
    navigate("/addrecipe/steps", {
      state: { addRecipInfo:info },
    })
  };
  const recipeNameref = useRef<HTMLTextAreaElement>(null);
  const recipeInforef = useRef<HTMLTextAreaElement>(null);
  var variantsClickButton = useContext(clickButtonMotion);

  return (
    <>
    <div className="recipe-body">追加レシピの情報</div>
    <div className="recipe-input">
          <FloatingLabel
            controlId="floatingTextarea"
            label="名称"
            className="mb-3"

          >
            <Form.Control as="textarea" placeholder="名称" ref={recipeNameref}/>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="詳細情報"
          >
            <Form.Control
              as="textarea"
              placeholder="詳細情報"
              style={{ height: "100px" }}
              ref={recipeInforef}
            />
          </FloatingLabel>
        </div>
      <div className="recipe-body">
        <SelectBeans collBackSelected={setSelectBeansKey} />
        <div>100ml抽出に使用する量:{dripRatioNumList[1]}{dripRatioNumList[0]}g
        <NumberInputOverlay numList={dripRatioNumList} callbackNumList={setDripRatioNumList} />
        </div>
      </div>
      <div className="recipe-scale">
        <Scalebar title="苦味" initValue={bitter} collBack={setBitter} />
      </div>
      <div className="recipe-scale">
        <Scalebar title="酸味" initValue={acidity} collBack={setAcidity} />
      </div>
      <div className="recipe-scale">
        <Scalebar title="コク" initValue={rich} collBack={setRich} />
      </div>
      <motion.img variants={variantsClickButton} initial="initial" animate="animate" exit="exit" whileTap="whileTap"
          className="footer-button-right fixed-bottom"
          src={window.location.origin + "/next.png"}
          alt="next"
          onClick={NextButtonClick}
      />
    </>
  );
};

export default AddRecipe;