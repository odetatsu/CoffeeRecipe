import React from "react";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect, useContext } from 'react';
import { motion } from "framer-motion";
import { GearItem } from './GearItem';

import "./styles.css";
import { useNavigate } from 'react-router-dom';
import Gear from './Gear';
import { pageChangeMotion, clickButtonMotion } from '../../../App';

const baseURL = process.env.REACT_APP_API + "/gears";

const GearListApp = () => {
  const [beans, setBeans] = useState<GearItem[]>([]);
  useEffect(() => {
    axios.get(baseURL).then((response: AxiosResponse<GearItem[]>) => {
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
        <div className="beanslist-body">器具一覧</div>
        <div className="card-wrapper">
          {beans.map((item) => (
            <Gear gear={item} key={item.key} />
          ))}
        </div>
      </motion.div>
      <motion.img variants={variantsButton} initial="initial" animate="animate" exit="exit" whileTap="whileTap"
          className="footer-button-right fixed-bottom"
          src="./plus.png"
          width="64px"
          alt="add"
          onClick={()=>{navigate("/addgear");}}
      />
    </>
  );
};

export default GearListApp;
