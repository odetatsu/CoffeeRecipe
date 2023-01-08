import { Button, FloatingLabel } from "react-bootstrap";
import "./styles.css";
import axios from 'axios';
import { useRef, useState } from 'react';
import Scalebar from '../Scalebar/Scalebar';
import Form from 'react-bootstrap/Form';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const baseURL = process.env.REACT_APP_API + "/beans";
const AddBeans = () => {
  const beansNameref = useRef<HTMLTextAreaElement>(null);
  const beansInforef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const SubmitButtonClick = () => {
    const beansName =  beansNameref.current?.value;
    const beansInfo = beansInforef.current?.value;
    if(beansName==='' || beansInfo==='')
    {
      return;
    }

    axios.post(baseURL,{
      roastVal: loastValue,
      beansInfo: beansInfo,
      beansName:beansName
    }).then(() => {
      navigate("/CoffeeBeans" )
    });
  };
  const [loastValue, setLoastValue] = useState(1);
  return (
    <>
      <motion.div>
        <div className="beans-body">追加珈琲の情報</div>
        <div className="beans-input">
          <FloatingLabel
            controlId="floatingTextarea"
            label="名称"
            className="mb-3"

          >
            <Form.Control as="textarea" placeholder="名称" ref={beansNameref}/>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="詳細情報"
          >
            <Form.Control
              as="textarea"
              placeholder="詳細情報"
              style={{ height: "100px" }}
              ref={beansInforef}
            />
          </FloatingLabel>
        </div>
        <div className="beans-scale">
          <Scalebar title="焙煎度" initValue={loastValue} collBack={setLoastValue}/>
        </div>
      </motion.div>
      <motion.img
        animate={{
          scale: 1
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
        }} whileTap={{y:"-30%", transition: { duration: 0.1 },}}
          className="footer-button fixed-bottom"
          src={window.location.origin + "/submit.png"}
          alt="submit"
          onClick={SubmitButtonClick}
      />
    </>
  );
};

export default AddBeans;
