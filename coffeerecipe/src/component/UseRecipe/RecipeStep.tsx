import axios, { AxiosResponse } from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import "./styles.css";
import { TimerApp } from "../StopWatch/Timer";
import { RecipeOrder } from "./RecipeOrder";
import { useDispatch } from "react-redux";
import {
  setorderRatio,
  setminutesDate,
  setsecondDate,
  settemperature,
  setorder,
} from "../../Store/recipeStepSlice";
import { useNavigate, useLocation } from "react-router-dom";
import RecipeStepInfo from "./RecipeStepInfo";
import { motion, useAnimation } from "framer-motion";

const baseURL = process.env.REACT_APP_API + "/recipestep/";
const RecipeStep = () => {
  const location = useLocation(); //location.stateでstateを取り出すことができる 型が変わっているので注意
  const { id } = useParams();
  const dispatch = useDispatch();
  const [totalStepNum, setTotalStepNum] = useState(0);
  const totalAmount = location.state.totalAmount as number; //型を無理やり与える
  const [currentStep, setCurrentStep] = useState(0);
  const [recipeOrders, setRecipeOrders] = useState<RecipeOrder[]>([]);

  const setDispatchVal = (currentRecipeOrder: RecipeOrder) => {
    dispatch(setminutesDate(Number(currentRecipeOrder?.minutesDate)));
    dispatch(setsecondDate(Number(currentRecipeOrder?.secondDate)));
    dispatch(settemperature(Number(currentRecipeOrder?.temperature)));
    dispatch(setorder(Number(currentRecipeOrder?.order)));
    dispatch(setorderRatio(Number(currentRecipeOrder?.orderRatio)));
    dispatch(settemperature(Number(currentRecipeOrder?.temperature)));
  };

  const nextStep = () => {
    const currenntRecipeOrder = recipeOrders[currentStep];
    console.log(currenntRecipeOrder);
    setDispatchVal(currenntRecipeOrder);
  };

  useEffect(() => {
    console.log(window.location.origin);
    axios.get(baseURL + id).then((response: AxiosResponse<RecipeOrder[]>) => {
      setRecipeOrders(response.data);
      setTotalStepNum(response.data.length);

      if (currentStep + 1 === response.data.length) {
        buttonAnimation.start({ scale: 0 }).then(() => {
          inputElement.current?.setAttribute(
            "src",
            window.location.origin + "/stop.png"
          );
          buttonAnimation.start({ scale: 1 });
        });
      } else {
        inputElement.current?.setAttribute(
          "src",
          window.location.origin + "/next.png"
        );
      }
    });
  }, []);
  const inputElement = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();
  const buttonAnimation = useAnimation();

  useEffect(() => {
    console.log("stepnum" + currentStep);
    nextStep();

    if (currentStep + 1 === totalStepNum) {
      buttonAnimation.start({ scale: 0 }).then(() => {
        inputElement.current?.setAttribute(
          "src",
          window.location.origin + "/stop.png"
        );
        buttonAnimation.start({ scale: 1 });
      });
    }
  }, [currentStep, recipeOrders]);

  const nextClick = () => {
    if (currentStep + 1 === totalStepNum) {
      navigate("/");
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  return (
    <>
      <motion.div
        animate={{ x: 0, opacity: 1, scale: 1 }}
        initial={{ x: "50%", opacity: 0, scale: 0.5 }}
        exit={{ x: "-50%", opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <RecipeStepInfo
          totalDripAmount={totalAmount}
          totalStepNum={totalStepNum}
        />
        <TimerApp />
      </motion.div>
      <motion.img
        animate={buttonAnimation}
        exit={{ scale: 0 }}
        transition={{duration: 0.5,}}
        whileTap={{ scale: 0.5, transition: { duration: 0.1 } }}
        onClick={nextClick}
        className="footer-button fixed-bottom"
        src={window.location.origin + "/next.png"}
        alt="Add"
        ref={inputElement}
      />
    </>
  );
};
export default RecipeStep;
