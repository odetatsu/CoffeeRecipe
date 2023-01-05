import React from "react";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import { motion } from "framer-motion";
import Beans from './Beans';
import { BeansItem } from './BeansItem';

import "./styles.css";

const baseURL = process.env.REACT_APP_API + "/beans";

const BeansListApp = () => {
  const [beans, setBeans] = useState<BeansItem[]>([]);
  useEffect(() => {
    axios.get(baseURL).then((response: AxiosResponse<BeansItem[]>) => {
      console.log(response.data);

      setBeans(response.data);
    });
  }, []);
  const blogVariants = {
    enter: {
      transition: { staggerChildren: 0.1 },
      duration: 0.5,
      ease: "easeInOut",
    },
    exit: {
      transition: { staggerChildren: 0.1 },
      duration: 0.5,
      ease: "easeInOut",
    },
  };
  return (
    <>
      <motion.div
        className="blog-list"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={blogVariants}
      >
        <div className="wrapper">
          {beans.map((item) => (
            <Beans beans={item} key={item.beansKey} />
          ))}
        </div>
      </motion.div>
      <a href="/">
        <img
          className="footer-button fixed-bottom"
          src="./plus.png"
          width="64px"
          alt="Home"
        />
      </a>
    </>
  );
};

export default BeansListApp;
