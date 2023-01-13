import "./styles.css";
import { useSelector, RootState } from "../../../Store/store";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const RecipeStepInfo = ({
  totalDripAmount,
  totalStepNum,
}: {
  totalDripAmount: number;
  totalStepNum: number;
}) => {
  const temperature = useSelector(
    (state: RootState) => state.recipeStep.temperature
  );
  const orderRatio = useSelector(
    (state: RootState) => state.recipeStep.orderRatio
  );
  const order = useSelector((state: RootState) => state.recipeStep.order);
  const [dripAmount, setDripAmount] = useState(0);
  const [currentTemperature, setCurrentTemperature] = useState(0);
  useEffect(() => {
    const localval = (Number(totalDripAmount) * orderRatio) / 100;
    setDripAmount(localval);
    setCurrentTemperature(temperature);
    animation.start({ x: "0%", opacity: 0, scale: 0 });
  }, [order]);
  const animation = useAnimation();
  return (
    <div className="step-info">
      <div>
        ステップ数:{order}/{totalStepNum}
      </div>
      <div>温度:{currentTemperature}℃</div>
      <div>ドリップ量:{dripAmount}ml</div>
    </div>
  );
};

export default RecipeStepInfo;
