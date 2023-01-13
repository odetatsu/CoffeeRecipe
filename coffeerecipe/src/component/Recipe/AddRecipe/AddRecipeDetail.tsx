import { useEffect, useState, useRef, useContext } from 'react';
import "./styles.css";
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { AddRecipeStepsItem } from './AddRecipeStepsItem';
import { AddRecipeInfoItem } from './AddRecipeInfoItem';
import axios from 'axios';
import NumberInputOverlay from '../../Utility/NumberInput/NumberInputOverlay';
import { submitButtonMotion, pageChangeMotion, clickButtonMotion } from '../../../App';

const baseURL = process.env.REACT_APP_API + "/recipestep";
const AddRecipeDetail = () => {
  const location = useLocation(); //location.stateでstateを取り出すことができる 型が変わっているので注意
  const addRecipeInfoItem = location.state.addRecipInfo as AddRecipeInfoItem; //型を無理やり与える
  const [stepNum, setStepNum]= useState(1);
  const [timerNumList,setTimerNumList] = useState<number[]>([0,0,0,0]);
  const [temperatureNumList,setTemperatureNumList] = useState<number[]>([0,0,0]);
  const [dripRatioNumList,setDripRatioNumList] = useState<number[]>([0,0,0,0]);
  const [submitFlg, setSubmitFlg] = useState(false);

  const commentref = useRef<HTMLTextAreaElement>(null);

  const [stepsInfo,setStepsInfo] = useState<AddRecipeStepsItem[]>([]);

  const navigate = useNavigate();
  const AddRecipeSteps=()=>
  {
    let temperatureSum=0;
    temperatureNumList.forEach((value,index)=>{temperatureSum+=(value * (10 ** index))});
    let dripRatioSum=0;
    dripRatioNumList.forEach((value,index)=>{dripRatioSum+=(value * (10 ** index))});
    const minutes = timerNumList[3]*10 + timerNumList[2];
    const seconds = timerNumList[1]*10 + timerNumList[0];
    const item:AddRecipeStepsItem={
      comment:commentref.current?.value,
      dripRatio:dripRatioSum,
      temperature:temperatureSum,
      minutes:minutes,
      seconds:seconds,
      step:stepNum
    } as AddRecipeStepsItem;
    setStepsInfo([...stepsInfo,item]);
    console.log(stepsInfo);
  }
  const onNextClick = ()=>
  {
    AddRecipeSteps();
    setStepNum(stepNum+1);
  };

  const onBackClick = ()=>
  {
    setStepNum(stepNum-1);
  };

  console.log(stepsInfo);
  useEffect(()=>{
    if(!submitFlg)return;
    axios.post(baseURL,{
      recipeInfo: addRecipeInfoItem,
      stepInfos: stepsInfo,
    }).then(() => {
      navigate("/" )
    });
  },[ submitFlg])
  const onSubmitClick = ()=>
  {
    AddRecipeSteps();
    setSubmitFlg(true);
  };
  var variantsButton = useContext(submitButtonMotion);
  var variants = useContext(pageChangeMotion);
  var variantsClickButton = useContext(clickButtonMotion);

  return (
    <>
     <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="recipe-body">
         <div>ステップ数:{stepNum}
        </div>
        <div>温度:{temperatureNumList[2]}{temperatureNumList[1]}{temperatureNumList[0]}
        <NumberInputOverlay numList={temperatureNumList} callbackNumList={setTemperatureNumList} />
        </div>
        <div>ドリップ比率:{dripRatioNumList[2]}{dripRatioNumList[1]}{dripRatioNumList[0]}
        <NumberInputOverlay numList={dripRatioNumList} callbackNumList={setDripRatioNumList} />
        </div>
        <div>タイマー:{timerNumList[3]}{timerNumList[2]}:{timerNumList[1]}{timerNumList[0]}
        <NumberInputOverlay numList={timerNumList} callbackNumList={setTimerNumList} />
        </div>
      </div>
      <div className="steps-input">
      <FloatingLabel
            controlId="floatingTextarea2"
            label="コメント"
          >
            <Form.Control
              as="textarea"
              placeholder="コメント"
              style={{ height: "100px" }}
              ref={commentref}
            />
          </FloatingLabel>
          </div>
          </motion.div>

          <motion.img variants={variantsClickButton} initial="initial" animate="animate" exit="exit" whileTap="whileTap"
          className="footer-button-right fixed-bottom"
          src={window.location.origin + "/next.png"}
          alt="next"
          onClick={onNextClick}
      />
      <motion.img variants={variantsButton} initial="initial" animate="animate" exit="exit" whileTap="whileTap"
          className="footer-button-center fixed-bottom"
          src={window.location.origin + "/submit.png"}
          alt="submit"
          onClick={onSubmitClick}
      />

      <motion.img variants={variantsClickButton} initial="initial" animate="animate" exit="exit" whileTap="whileTap"
          className="footer-button-left fixed-bottom"
          src={window.location.origin + "/back-page.png"}
          alt="next"
          onClick={onBackClick}
      />
    </>
  );
};

export default AddRecipeDetail;