import React, { useContext } from "react";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { BrewedItem } from './BrewedItem';
import "./styles.css";
import Gear from './Brewed';
import { pageChangeMotion } from '../../../App';

const baseURL = process.env.REACT_APP_API + "/brewes";

const BrewedListApp = () => {
  const [used, setUsed] = useState<BrewedItem[]>([]);
  useEffect(() => {
    axios.get(baseURL).then((response: AxiosResponse<BrewedItem[]>) => {
      console.log(response.data);

      setUsed(response.data);
    });
  }, []);
  const variants = useContext<Variants>(pageChangeMotion);

  return (
    <>
      <motion.div variants={variants} animate="animate" initial="initial" exit="exit">
        <div className="beanslist-body">使用レシピ一覧</div>
        <div className="card-wrapper">
          {used.map((item) => (
            <Gear gear={item} key={item.key} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default BrewedListApp;
