import { Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import "./styles.css";

const NumberInputApp = () => {
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

  return (
    <div className="numberInputApp">
      <div className="numberView2">
        <span>
          {num4}
          {num3}:{num2}
          {num1}
        </span>
      </div>
      <ButtonGroup vertical className="d-grid" size="sm">
        <ButtonGroup>
          <Button className="btn btn-lg btn-primary" onClick={() => addNumber(1)}>1</Button>
          <Button onClick={() => addNumber(2)}>2</Button>
          <Button onClick={() => addNumber(3)}>3</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={() => addNumber(4)}>4</Button>
          <Button onClick={() => addNumber(5)}>5</Button>
          <Button onClick={() => addNumber(6)}>6</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={() => addNumber(7)}>7</Button>
          <Button onClick={() => addNumber(8)}>8</Button>
          <Button onClick={() => addNumber(9)}>9</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={() => slideNumber(2)}>00</Button>
          <Button onClick={() => slideNumber(1)}>0</Button>
          <Button variant="success" onClick={() => backNumber()}>
            ←
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  );
};


export default NumberInputApp;