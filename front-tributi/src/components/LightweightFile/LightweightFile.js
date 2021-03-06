import React, { useState, useContext } from "react";
import 'antd/dist/antd.css';
import './LightweightFile.css';
import SelectBoton from './SelectBoton';
import UploadLightweightFile from "./UploadLightweightFile";
import Context from '../../context';

const LightweightFileComponent = () => {
  const [Lightweight, setLightweight] = useState();
  const [file, setFile] = useState();
  const context = useContext(Context);
  const {state, setState} = context;

  const handleClick = (e) => {
    console.log("Click");
    console.log(Lightweight);
    console.log(file)
    console.log("state", state)
    setState({
      ...state,
      Lightweight: {
        Lightweight: JSON.parse(Lightweight),
        file
      }
    })
  };

  return (
    <div className="box-dragg-file">
      <section className="title-tax-engine">
        <p className="letter-title">Carga el archivo Tax Engine liviano</p>
      </section>
      <h1 className="ask-tax-engine">
        ¿Requieres subir el archivo tax Engine liviano?
      </h1>
      <div className="select-botton">
        <SelectBoton setValue={setLightweight} />
      </div>
      <br></br>
      <UploadLightweightFile setFile={setFile}/>
      <br></br>
      <button onClick={handleClick}>Guardar</button>
      <br></br>
    </div>
  );
};

export default LightweightFileComponent;

