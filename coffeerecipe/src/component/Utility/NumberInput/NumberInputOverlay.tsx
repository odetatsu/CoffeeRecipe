import "./styles.css";
import { motion } from 'framer-motion';
import NumberInputApp from './NumberInputApp';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const NumberInputOverlay = ({numList,callbackNumList}:{numList:number[],callbackNumList:Function}) => {

  return (
    <OverlayTrigger
    trigger="click"
    placement="bottom"
    rootClose={true}

    overlay={
      <Popover id="popover-basic">
        <Popover.Body>
          <NumberInputApp numList={numList} callbackNumList={callbackNumList}/>
        </Popover.Body>
      </Popover>
    }
  >

    <motion.img
      whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
      width="32px"
      src={window.location.origin + "/numberinput.png"}
      alt="numberinput"
    />
  </OverlayTrigger>
  );
};


export default NumberInputOverlay;