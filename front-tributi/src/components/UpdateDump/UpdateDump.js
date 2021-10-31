import React, { useState, useContext } from "react";
import 'antd/dist/antd.css';
import {Button} from 'antd';
import SelectButton from './SelectButton';
import Context from '../../context';
import './UpdateDump.css';

const UpdateDumpComponent = () => {
  const [updateDump, setUpdateDump] = useState();
  const context = useContext(Context)
  const { state, setState } = context;

  const handleClick = (e) => {
    console.log(updateDump);
    console.log("state", state)
    setState({
      ...state,
      updateDump: JSON.parse(updateDump),
    })
  };
  return (
    <div className="box-dragg-file">
      <section className="title-update-dump">
        <p className="letter-title">
          Actualización
        </p>
      </section>
      <h2>¿Hiciste alguna modificación en el Dump?</h2>
      <div className="select-button">
        <SelectButton setValue={setUpdateDump} />
      </div>
      <Button className="select-button-updateDump" style={{ background: '#2a6662', border: '#2a6662'}} type="primary" onClick={handleClick}>Guardar</Button>
    </div>
  )
}

export default UpdateDumpComponent
