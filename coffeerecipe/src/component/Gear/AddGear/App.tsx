import { Button, Col, FloatingLabel } from "react-bootstrap";
import "./styles.css";
import axios from 'axios';
import { useContext, useRef, useState } from 'react';
import Scalebar from '../../Utility/Scalebar/Scalebar';
import Form from 'react-bootstrap/Form';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { pageChangeMotion, clickButtonMotion, submitButtonMotion } from '../../../App';

const baseURL = process.env.REACT_APP_API + "/gear";
const AddGear = () => {
  const nameref = useRef<HTMLTextAreaElement>(null);
  const inforef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const SubmitButtonClick = () => {
    const Name =  nameref.current?.value;
    const Info = inforef.current?.value;
    if(Name==='')
    {
      setValidated(true);
      return;
    }

    axios.post(baseURL,{
      info: Info,
      name:Name
    }).then(() => {
      navigate("/gears" )
    });
  };
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
                  ref={nameref}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  This is required.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <FloatingLabel controlId="floatingTextarea2" label="詳細情報">
              <Form.Control
                as="textarea"
                placeholder="詳細情報"
                style={{ height: "100px" }}
                ref={inforef}
              />
            </FloatingLabel>
          </Form>
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

export default AddGear;
