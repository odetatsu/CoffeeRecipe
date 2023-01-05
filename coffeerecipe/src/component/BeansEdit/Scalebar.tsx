import Form from "react-bootstrap/Form";
import React from "react";
import { useState,useRef } from "react";
import "./styles.css"
import { Card } from 'react-bootstrap';

const Scalebar = () => {
  const inputElement = useRef<HTMLInputElement>(null)
  const [roastValue, setRoastValue] = useState<number>(1);

  const handleScaleChange = () => {
    console.log(inputElement.current?.value);
    let value  =Number(inputElement.current?.value);
    setRoastValue(value);
  }
  return (
    <>
      <Card className="card">
        <Card.Header as="h5">焙煎度</Card.Header>
        <Card.Body>
          <Form.Label>焙煎度</Form.Label>
          <Form.Range
            min="1"
            max="10"
            step="1"
            value={roastValue}
            ref={inputElement}
            onChange={handleScaleChange}
          />
          <Form.Text>焙煎度：{roastValue}</Form.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Scalebar;
