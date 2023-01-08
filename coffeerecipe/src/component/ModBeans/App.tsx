import { Button, FloatingLabel } from "react-bootstrap";
import "./styles.css";
import axios, { AxiosResponse } from 'axios';
import { useRef, useState, useEffect } from 'react';
import Scalebar from '../Scalebar/Scalebar';
import Form from 'react-bootstrap/Form';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { ModBeansItem } from './BeansItem';

const baseURL = process.env.REACT_APP_API + "/beans/";

const ModBeans = () => {
  const { id } = useParams();

  const beansNameref = useRef<HTMLTextAreaElement>(null);
  const beansInforef = useRef<HTMLTextAreaElement>(null);
  const [initBeantName, setInitBeansName] = useState("");
  const [initBeantInfo, setInitBeansInfo] = useState("");

  const navigate = useNavigate();
  const SubmitButtonClick = () => {
    const beansName =  beansNameref.current?.value;
    const beansInfo = beansInforef.current?.value;
    if(beansName==='' || beansInfo==='')
    {
      return;
    }

    axios.put(baseURL + id,{
      beansKey:id,
      roastVal: roastValue,
      beansInfo: beansInfo,
      beansName:beansName
    }).then(() => {
      navigate("/CoffeeBeans" )
    });
  };
  const [roastValue, setRoastValue] = useState(0);

  useEffect(() => {
    axios.get(baseURL + id).then((response: AxiosResponse<ModBeansItem>) => {
      console.log(response.data);
      const res = response.data as ModBeansItem;
      setInitBeansName(res.beansName);
      setInitBeansInfo(res.beansInfo);
      setRoastValue(res.roastVal);
    });
  }, []);
  const DeleteButtonClick = () => {
    console.log("delete");
    axios.delete(baseURL + id).then(() => {
      navigate("/CoffeeBeans" )
    });
  };
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
            <Form.Control as="textarea" placeholder="名称" ref={beansNameref} value={initBeantName}/>
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
              value={initBeantInfo}
            />
          </FloatingLabel>
        </div>
        <div className="beans-scale">
          {roastValue!==0 && <Scalebar title="焙煎度" initValue={roastValue} collBack={setRoastValue}/>}
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
          className="footer-button2 fixed-bottom"
          src={window.location.origin + "/delete.png"}
          alt="delete"
          onClick={DeleteButtonClick}
      />
    </>
  );
};

export default ModBeans;
