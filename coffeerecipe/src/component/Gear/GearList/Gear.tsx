import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { motion } from 'framer-motion';
import { GearItem } from './GearItem';
import { useContext } from 'react';
import { CardMotion } from '../../../App';

const Gear = ({ gear }: { gear: GearItem }) => {
  const navigate = useNavigate();
  const clickCard = (event: React.MouseEvent<HTMLInputElement>) => {
    navigate("/modgear/" + gear.key);
  };
  var variants = useContext(CardMotion);

  return (
    <motion.div variants={variants} whileHover="whileHover" key="gearCard">
      <Card className="card" onClick={clickCard}>
        <Card.Header as="h5">{gear.name}</Card.Header>
        <Card.Body>
          <Card.Text>{gear.info}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default Gear;
