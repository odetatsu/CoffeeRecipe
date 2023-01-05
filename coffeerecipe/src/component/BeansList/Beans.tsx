import React from "react";
import { BeansItem } from "./BeansItem";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { motion } from 'framer-motion';

const Beans = ({ beans }: { beans: BeansItem }) => {
  const navigate = useNavigate();
  const clickCard = (event: React.MouseEvent<HTMLInputElement>) => {
    navigate("/modBeans/" + beans.beansKey);
  };
  const postPreviewVariants = {
    initial: { x: "100%", opacity: 0 },
    enter: { x: 0, opacity: 1, duration: 0.5, ease: "easeInOut" },
    exit: { x: "-100%", opacity: 0, duration: 0.5, ease: "easeInOut" },
  };
  return (
    <motion.div
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.07,
        transition: { duration: 0.2 },
      }}
      key="beansCard"
    >
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