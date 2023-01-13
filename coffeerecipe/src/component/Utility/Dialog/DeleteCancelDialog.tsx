
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const DeleteCancelDialog = ({isshow, onHideFunc,title, message,callBackSetState}:{isshow:boolean, onHideFunc:Function, title:string,message:string,callBackSetState:Function})=> 
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
        削除してもよろしいでしょうか？
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={()=>onClickButton(false)}>Cancel</Button>
        <Button variant="danger" onClick={()=>onClickButton(true)}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteCancelDialog;