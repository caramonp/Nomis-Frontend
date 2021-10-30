import React from "react";
import { Radio } from "antd";

const SelectBoton = ({ setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={handleChange}>
      <Radio value="true">Si</Radio>
      <Radio value="false">No</Radio>
    </Radio.Group>
  );
};

export default SelectBoton;
