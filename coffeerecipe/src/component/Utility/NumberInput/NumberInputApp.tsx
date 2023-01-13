import "./styles.css";
import InputButtons from "./InputButtons";

const NumberInputApp = ({numList,callbackNumList}:{numList:number[],callbackNumList:Function}) => {


  const inputNum = (inputNumber:number) => {
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

  };


  const addNumber = (num: number) => {
    if (numList[numList.length-1] !== 0) return;
    let newNumList:number[] = [];
    newNumList.push(num);

    numList.forEach((value: number, index: number)=>{
      if(index === numList.length-1){ return; }
      newNumList.push(value);

    });
    callbackNumList(newNumList);
  };
  const slideNumber = (step: number) => {
    if (numList[numList.length-1] !== 0) return;
    if (step === 1) {
      let newNumList:number[] = [];
      newNumList.push(0);
      numList.forEach((value: number, index: number)=>{
        if(index === numList.length-1){ return; }
        newNumList.push(value);

      });
      callbackNumList(newNumList);
      return;
    }
    if (numList[numList.length-2] !== 0) return;
    let newNumList:number[] = [];

    newNumList.push(0);
    newNumList.push(0);
    numList.forEach((value: number, index: number)=>{
      if(index === numList.length-1 ||index === numList.length-2){ return; }
      newNumList.push(value);

    });
    callbackNumList(newNumList);
  };
  const backNumber = () => {
    let newNumList:number[] = [];
    numList.forEach((value: number, index: number)=>{
      if(index === 0)return;
      newNumList.push(value);

    });
    newNumList.push(0);
    callbackNumList(newNumList);
  };

  return (
    <div className="numberInputApp">
      <InputButtons collbackInputNumber={inputNum}/>
    </div>
  );
};


export default NumberInputApp;