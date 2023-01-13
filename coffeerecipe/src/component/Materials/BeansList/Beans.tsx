import React from "react";
import { BeansItem } from "./BeansItem";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { motion } from 'framer-motion';
import { CardMotion } from '../../../App';
import { useContext } from 'react';

const Beans = ({ beans }: { beans: BeansItem }) => {
  const navigate = useNavigate();
  const clickCard = (event: React.MouseEvent<HTMLInputElement>) => {
    navigate("/modbeans/" + beans.beansKey);
  };

  var variants = useContext(CardMotion);

  return (
    <motion.div variants={variants} whileHover="whileHover" key="beansCard">
      <Card className="card" onClick={clickCard}>
        <Card.Header as="h5">{beans.beansName}</Card.Header>
        <Card.Body>
          <Card.Text>{beans.beansInfo}</Card.Text>
          <Card.Text>焙煎度：{beans.roastVal}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default Beans;
