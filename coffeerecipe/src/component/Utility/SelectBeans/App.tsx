import React, { ChangeEvent, ChangeEventHandler, SelectHTMLAttributes } from "react";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect, useRef } from 'react';
import { BeansItem } from './BeansItem';
import Form from 'react-bootstrap/Form';

const baseURL = process.env.REACT_APP_API + "/beans";

const SelectBeans = ({collBackSelected}:{collBackSelected:Function}) => {
  const [beans, setBeans] = useState<BeansItem[]>([]);
  useEffect(() => {
    axios.get(baseURL).then((response: AxiosResponse<BeansItem[]>) => {
      setBeans(response.data);
    });
  }, []);
  const selectBenas = (e: ChangeEvent<HTMLSelectElement>) =>
  {
    console.log(e.target.value);
    collBackSelected(e.target.value);
  }
  return (
    <>
      <Form.Select aria-label="Default select example" onChange={selectBenas}>
        <option value={0} key={0}>使用する素材を選択</option>
        {beans.map((item) => (
          <option value={item.beansKey} key={item.beansKey}>
            {item.beansName}:焙煎度{item.roastVal}
          </option>
        ))}
      </Form.Select>
    </>
  );
};

export default SelectBeans;
