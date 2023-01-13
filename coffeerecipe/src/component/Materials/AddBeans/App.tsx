import { Button, Col, FloatingLabel } from "react-bootstrap";
import "./styles.css";
import axios from 'axios';
import { useRef, useState, useContext } from 'react';
import Scalebar from '../../Utility/Scalebar/Scalebar';
import Form from 'react-bootstrap/Form';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { pageChangeMotion, submitButtonMotion } from '../../../App';

const baseURL = process.env.REACT_APP_API + "/beans";
const AddBeans = () => {
  const beansNameref = useRef<HTMLTextAreaElement>(null);
  const beansInforef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const SubmitButtonClick = () => {
    const beansName =  beansNameref.current?.value;
    const beansInfo = beansInforef.current?.value;
    if(beansName==='')
    {
      setValidated(true);
      return;
    }

    axios.post(baseURL,{
      roastVal: loastValue,
      beansInfo: beansInfo,
      beansName:beansName
    }).then(() => {
      navigate("/CoffeeBeans" )
    });
  };
  const [loastValue, setLoastValue] = useState(1);
  const [validated, setValidated] = useState(false);
  var variants = useContext(pageChangeMotion);
  var variantsButton = useContext(submitButtonMotion);
  return (
    <>
      <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
        <div className="beans-body">追加素材の情報</div>
        <div className="beans-input">
          <Form noValidate validated={validated}>
            <Form.Group as={Col} controlId="validationCustom">
              <FloatingLabel
                controlId="floatingTextarea"
                label="名称"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="名称"
                  ref={beansNameref}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  This is required.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            </Form>

            <FloatingLabel controlId="floatingTextarea2" label="詳細情報">
              <Form.Control
                as="textarea"
                placeholder="詳細情報"
                style={{ height: "100px" }}
                ref={beansInforef}
              />
            </FloatingLabel>
        </div>
        <div className="beans-scale">
          <Scalebar
            title="焙煎度"
            initValue={loastValue}
            collBack={setLoastValue}
          />
        </div>
      </motion.div>
      <motion.img variants={variantsButton} initial="initial" animate="animate" exit="exit" whileTap="whileTap"
        className="footer-button-right fixed-bottom"
        src={window.location.origin + "/submit.png"}
        alt="submit"
        onClick={SubmitButtonClick}
      />
    </>
  );
};

export default AddBeans;
