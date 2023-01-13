import { Button, FloatingLabel } from "react-bootstrap";
import "./styles.css";
import axios, { AxiosResponse } from 'axios';
import { useRef, useState, useEffect, useContext } from 'react';
import Scalebar from '../../Utility/Scalebar/Scalebar';
import Form from 'react-bootstrap/Form';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { ModBeansItem } from './BeansItem';
import DeleteCancelDialog from '../../Utility/Dialog/DeleteCancelDialog';
import { pageChangeMotion, submitButtonMotion, clickButtonMotion } from '../../../App';

const baseURL = process.env.REACT_APP_API + "/beans/";

const ModBeans = () => {
  const { id } = useParams();

  const beansNameref = useRef<HTMLTextAreaElement>(null);
  const beansInforef = useRef<HTMLTextAreaElement>(null);
  const [initBeantName, setInitBeansName] = useState("");
  const [initBeantInfo, setInitBeansInfo] = useState("");

  const navigate = useNavigate();
  const SubmitButtonClick = () => {
    const beansName =  beansNameref.current?.value;
    const beansInfo = beansInforef.current?.value;
    if(beansName==='' || beansInfo==='')
    {
      return;
    }
    let test = beansInforef.current?.innerHTML;

    axios.put(baseURL + id,{
      beansKey:id,
      roastVal: roastValue,
      beansInfo: beansInfo,
      beansName:beansName
    }).then(() => {
      navigate("/CoffeeBeans" )
    });
  };
  const [roastValue, setRoastValue] = useState(0);

  useEffect(() => {
    axios.get(baseURL + id).then((response: AxiosResponse<ModBeansItem>) => {
      console.log(response.data);
      const res = response.data as ModBeansItem;
      setInitBeansName(res.beansName);
      setInitBeansInfo(res.beansInfo);
      setRoastValue(res.roastVal);

    });
  }, []);
  const [isDelete, setIsDelete] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const DeleteButtonClick = () => {
    setModalShow(true);
    return;

  };
  useEffect(() => {
    if(!isDelete)return;
    console.log("delete");
    axios.delete(baseURL + id).then(() => {
      navigate("/CoffeeBeans" )
    });
  }, [isDelete]);
  var variants = useContext(pageChangeMotion);
  var variantsButton = useContext(submitButtonMotion);
  var variantsclickButton = useContext(clickButtonMotion);

  return (
    <>
    <DeleteCancelDialog isshow={modalShow} onHideFunc={() => setModalShow(false)} title={"コーヒ情報"} message={"削除してもよろしいでしょうか？"} callBackSetState={setIsDelete}/>
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
        <div className="beans-body">追加珈琲の情報</div>
        <div className="beans-input">
          <FloatingLabel
            controlId="floatingTextarea"
            label="名称"
            className="mb-3"

          >
            <Form.Control as="textarea" placeholder="名称" ref={beansNameref} defaultValue={initBeantName}/>
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="詳細情報"
          >
            <Form.Control
              as="textarea"
              placeholder="詳細情報"
              style={{ height: "100px" }}
              ref={beansInforef}
              defaultValue={initBeantInfo}
            />
          </FloatingLabel>
        </div>
        <div className="beans-scale">
          {roastValue!==0 && <Scalebar title="焙煎度" initValue={roastValue} collBack={setRoastValue}/>}
        </div>
      </motion.div>
      <motion.img variants={variantsButton} initial="initial" animate="animate" exit="exit" whileTap="whileTap"
          className="footer-button-right fixed-bottom"
          src={window.location.origin + "/submit.png"}
          alt="submit"
          onClick={SubmitButtonClick}
      />
      <motion.img variants={variantsclickButton} initial="initial" animate="animate" exit="exit" whileTap="whileTap"
          className="footer-button-left fixed-bottom"
          src={window.location.origin + "/delete.png"}
          alt="delete"
          onClick={DeleteButtonClick}
      />
    </>
  );
};

export default ModBeans;
