import axios, { AxiosResponse } from "axios";
import { useEffect, useState, useRef } from 'react';
import { RecipeItem } from "../RecipesList/RecipeItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import Scalebar from '../Scalebar/Scalebar';
import "./styles.css";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SelectBeans from '../SelectBeans/App';
import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const baseURL = "addRecipe";
const AddRecipe = () => {
  const [rich, setRich] = useState(1);
  const [bitter, setBitter] = useState(1);
  const [acidity, setAcidity] = useState(1);
  const [selectBeansKey, setSelectBeansKey] = useState(0);
  const navigate = useNavigate();


  const NextButtonClick = () => {
    axios.post(baseURL,{
    }).then(() => {
      navigate("/" );
    });
  };
  const recipeNameref = useRef<HTMLTextAreaElement>(null);
  const recipeInforef = useRef<HTMLTextAreaElement>(null);
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
      <motion.img
        animate={{
          scale: 1,
        }}
        initial={{
          scale: 0,
        }}
        exit={{
          scale: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        whileTap={{ y: "-30%", transition: { duration: 0.1 } }}
        className="footer-button fixed-bottom"
        src={window.location.origin + "/next.png"}
        alt="next"
        onClick={NextButtonClick}
      />
    </>
  );
};

export default AddRecipe;