import React from "react";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect, useContext } from 'react';
import CardGroup from "react-bootstrap/CardGroup";
import { motion } from "framer-motion";
import Beans from './Beans';
import { BeansItem } from './BeansItem';

import "./styles.css";
import { useNavigate } from 'react-router-dom';
import { pageChangeMotion, clickButtonMotion } from '../../../App';

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

  var variants = useContext(pageChangeMotion);
  var variantsButton = useContext(clickButtonMotion);

  return (
    <>
      <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
        <div className="beanslist-body">素材一覧</div>
        <div className="card-wrapper">
          {beans.map((item) => (
            <Beans beans={item} key={item.beansKey} />
          ))}
        </div>
      </motion.div>
      <motion.img variants={variantsButton} initial="initial" animate="animate" exit="exit" whileTap="whileTap"
          className="footer-button-right fixed-bottom"
          src="./plus.png"
          width="64px"
          alt="add"
          onClick={()=>{navigate("/addbeans");}}
      />
    </>
  );
};

export default BeansListApp;
