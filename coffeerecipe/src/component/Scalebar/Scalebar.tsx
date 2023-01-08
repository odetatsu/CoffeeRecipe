import Form from "react-bootstrap/Form";
import React from "react";
import { useState,useRef } from "react";
import "./styles.css"
import { Card } from 'react-bootstrap';

const Scalebar = ({title,initValue, collBack}:{title:string,initValue:number, collBack:Function}) => {
  const inputElement = useRef<HTMLInputElement>(null);
  const [roastValue, setRoastValue] = useState<number>(initValue);
  const handleScaleChange = () => {
    let value  =Number(inputElement.current?.value);
    setRoastValue(value);
    collBack(value);
  };
  return (
    <>
      <Card className="card">
        <Card.Header as="h5">{title}</Card.Header>
        <Card.Body>
          <Form.Range
            min="1"
            max="10"
            step="1"
            value={initValue}
            ref={inputElement}
            onChange={handleScaleChange}
          />
          <Form.Text>{roastValue}</Form.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Scalebar;
