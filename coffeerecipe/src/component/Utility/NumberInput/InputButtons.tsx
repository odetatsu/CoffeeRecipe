import "./styles.css";
import { motion, Variants } from 'framer-motion';


const InputButtons = ({collbackInputNumber}:{collbackInputNumber:Function}) => {
  const inputNumber = (num: number) => {
    collbackInputNumber(num);
  };
  const variantsClickButton:Variants = {whileHover:{scale: 1.1, transition: { duration: 0.2 }}, whileTap:{scale:0.9, transition: { duration: 0.1 },}};
  return (
    <>
    <div className="row">
      <div className="column">
        <motion.img variants={variantsClickButton} whileHover="whileHover" whileTap="whileTap" src={window.location.origin + "/button1.png"} alt="1" onClick={() => inputNumber(1)}/>
        <motion.img variants={variantsClickButton} whileHover="whileHover" whileTap="whileTap" src={window.location.origin + "/button2.png"} alt="2" onClick={() => inputNumber(2)}/>
        <motion.img variants={variantsClickButton} whileHover="whileHover" whileTap="whileTap" src={window.location.origin + "/button3.png"} alt="3" onClick={() => inputNumber(3)}/>
      </div>
      <div className="column">
        <motion.img variants={variantsClickButton} whileHover="whileHover" whileTap="whileTap" src={window.location.origin + "/button4.png"} alt="4" onClick={() => inputNumber(4)}/>
        <motion.img variants={variantsClickButton} whileHover="whileHover" whileTap="whileTap" src={window.location.origin + "/button5.png"} alt="5" onClick={() => inputNumber(5)}/>
        <motion.img variants={variantsClickButton} whileHover="whileHover" whileTap="whileTap" src={window.location.origin + "/button6.png"} alt="6" onClick={() => inputNumber(6)}/>
      </div>
      <div className="column">
        <motion.img variants={variantsClickButton} whileHover="whileHover" whileTap="whileTap" src={window.location.origin + "/button7.png"} alt="7" onClick={() => inputNumber(7)}/>
        <motion.img variants={variantsClickButton} whileHover="whileHover" whileTap="whileTap" src={window.location.origin + "/button8.png"} alt="8" onClick={() => inputNumber(8)}/>
        <motion.img variants={variantsClickButton} whileHover="whileHover" whileTap="whileTap" src={window.location.origin + "/button9.png"} alt="9" onClick={() => inputNumber(9)}/>
      </div>
      <div className="column">
        <motion.img variants={variantsClickButton} whileHover="whileHover" whileTap="whileTap" src={window.location.origin + "/button00.png"} alt="00" onClick={() => inputNumber(100)}/>
        <motion.img variants={variantsClickButton} whileHover="whileHover" whileTap="whileTap" src={window.location.origin + "/button0.png"} alt="0" onClick={() => inputNumber(10)}/>
        <motion.img variants={variantsClickButton} whileHover="whileHover" whileTap="whileTap" src={window.location.origin + "/back.png"} alt="back" onClick={() => inputNumber(-1)}/>
      </div>
    </div>

      </>
  );
};


export default InputButtons;