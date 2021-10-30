import React, { useState, useContext } from "react";
import 'antd/dist/antd.css';
import {Button} from 'antd';
import SelectButton from './SelectButton';
import Context from '../../context';
import './Mathops.css';

const MathopsComponent = () => {
  const [mathops, setMathops] = useState();
  const context = useContext(Context)
  const { state, setState } = context;

  const handleClick = (e) => {
    console.log(mathops);
    console.log("state", state)
    setState({
      ...state,
      mathops: {
        mathops: JSON.parse(mathops),
      }
    })
  };

  return (
    <div className="box-dragg-file">
      <section className="title-update-dump">
        <p className="letter-title">
        Generar mathops
        </p>
      </section>
      <h2>¿Generaste Mathops?</h2>
      <div className="select-button">
        <SelectButton setValue={setMathops} />
      </div>
      <Button className="select-button-mathops" style={{ background: '#2a6662', border: '#2a6662'}} type="primary" onClick={handleClick}>Guardar</Button>
    </div>
  )
}

export default MathopsComponent
