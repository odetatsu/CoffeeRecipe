import React from "react";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import { motion } from "framer-motion";
import Beans from './Beans';
import { BeansItem } from './BeansItem';

import "./styles.css";
import { useNavigate } from 'react-router-dom';

const baseURL = process.env.REACT_APP_API + "/beans";

const BeansListApp = () => {
  const [beans, setBeans] = useState<BeansItem[]>([]);
  useEffect(() => {
    axios.get(baseURL).then((response: AxiosResponse<BeansItem[]>) => {
      console.log(response.data);

      setBeans(response.data);
    });
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        initial={{
          x: "50%",
          opacity: 0,
          scale: 0.5,
        }}
        exit={{
          x: "-50%",
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="beanslist-body">珈琲一覧</div>
        <div className="card-wrapper">
          {beans.map((item) => (
            <Beans beans={item} key={item.beansKey} />
          ))}
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
        }} whileTap={{scale:0.5, transition: { duration: 0.1 },}}
          className="footer-button fixed-bottom"
          src="./plus.png"
          width="64px"
          alt="add"
          onClick={()=>{navigate("/addbeans");}}
      />
    </>
  );
};

export default BeansListApp;
