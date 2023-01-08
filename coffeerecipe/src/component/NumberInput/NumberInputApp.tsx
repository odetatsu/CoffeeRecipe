import { Button, ButtonGroup } from "react-bootstrap";
import { useState, useEffect } from 'react';
import "./styles.css";
import InputButtons from "./InputButtons";
import { useSelector, RootState } from '../../Store/store';
import { useDispatch } from 'react-redux';
import { setNumState1,setNumState2,setNumState3,setNumState4 } from "../../Store/numberInputSlice";

const NumberInputApp = () => {

  const inputNumber = useSelector((state: RootState) => state.numberInput.inputValue);
  const count = useSelector((state: RootState) => state.numberInput.count);
  useEffect(() => {
    console.log(inputNumber);
    if(inputNumber===100)
    {
      slideNumber(2);
      return;
    }
    if(inputNumber===10)
    {
      slideNumber(1);
      return;
    }
    if(inputNumber===-1)
    {
      backNumber();
      return;
    }
    addNumber(inputNumber);

  }, [inputNumber,count]);

  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [num3, setNum3] = useState<number>(0);
  const [num4, setNum4] = useState<number>(0);
  const addNumber = (num: number) => {
    if (num4 !== 0) return;
    setNum4(num3);
    setNum3(num2);
    setNum2(num1);
    setNum1(num);
  };
  const slideNumber = (step: number) => {
    if (num4 !== 0) return;
    if (step === 1) {
      setNum4(num3);
      setNum3(num2);
      setNum2(num1);
      setNum1(0);
      return;
    }
    if (num3 !== 0) return;

    setNum4(num2);
    setNum3(num1);
    setNum2(0);
    setNum1(0);
  };
  const backNumber = () => {
    setNum4(0);
    setNum3(num4);
    setNum2(num3);
    setNum1(num2);
    return;
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNumState1(num1));
  }, [num1]);
  useEffect(() => {
    dispatch(setNumState2(num2));
  }, [num2]);
  useEffect(() => {
    dispatch(setNumState3(num3));
  }, [num3]);
  useEffect(() => {
    dispatch(setNumState4(num4));
  }, [num4]);


  return (
    <div className="numberInputApp">
      <InputButtons/>
    </div>
  );
};


export default NumberInputApp;