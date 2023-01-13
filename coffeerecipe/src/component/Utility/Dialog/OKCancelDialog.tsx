
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const OKCancelDialog = ({isshow, onHideFunc,callBackSetState}:{isshow:boolean, onHideFunc:Function,callBackSetState:Function})=> 
{
  const onClickButton= (isOK:boolean) => 
  {
    callBackSetState(isOK);
    onHideFunc(false);
  }
  return (
    <Modal
      show={isshow}
      onHide={()=>{onHideFunc(isshow)}}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        登録してもよろしいでしょうか？
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={()=>onClickButton(false)}>Cancel</Button>
        <Button variant="primary" onClick={()=>onClickButton(true)}>OK</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OKCancelDialog;