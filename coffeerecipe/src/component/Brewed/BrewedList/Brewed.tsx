import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { motion, Variants } from 'framer-motion';
import { BrewedItem } from './BrewedItem';
import { CardMotion } from '../../../App';

const Brewed = ({ gear }: { gear: BrewedItem }) => {
  const variants = useContext<Variants>(CardMotion);

  return (
    <motion.div variants={variants} whileHover="whileHover" key="beansCard">
      <Card className="card">
        <Card.Header as="h5">{gear.name}</Card.Header>
        <Card.Body>
          <Card.Text>{gear.date}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default Brewed;
