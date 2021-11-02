import React, { useState, useContext } from "react";
import {Button} from 'antd';
import SelectYear from "./SelectYear";
import SelectBoton from "./SelectBoton";
import UploadFile from "./UploadFile";
import "antd/dist/antd.css";
import "./TaxFile.css";
import Context from '../../context';


//const { Dragger } = Upload;
/*
const TaxFile = {
  name: "file",

  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
      console.log(this)
    }
    if (status === 'done') {

        // Create an object of formData
        const formData = new FormData();
      
        // Update the formData object
        formData.append(
          "myFile",
          this.state.file,
          this.state.file.name
        );

        console.log(formData);
      message.success(`${info.file.name} file uploaded success`)
    }
  },

  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};*/

const TaxFileComponent = () => {
  const [taxEngine, setTaxEngine] = useState();
  const [year, setYear] = useState();
  const [file, setFile] = useState();
  //const Context=React.createContext("Algo")
  const context = useContext(Context);
  const {state, setState} = context;

  const handleClick = (e) => {
    console.log("Click");
    console.log(taxEngine);
    console.log(year);
    console.log(file)
    console.log("state", state)
    setState({
      ...state,
      taxEngine: {
        taxEngine: JSON.parse(taxEngine),
        year: parseInt(year),
        file
      }
    })
  };

  return (
    <div className="box-dragg-file">
      <section className="title-tax-engine">
        <p className="letter-title">Carga el archivo Tax Engine</p>
      </section>
      <h1 className="ask-tax-engine">
        ¿Realizaste alguna modificación en el tax engine?
      </h1>
      <div className="select-botton">
        <SelectBoton setValue={setTaxEngine} />
      </div>
      <br></br>
      <UploadFile setFile={setFile}/>
      <br></br>
      <div className="select-year">
        <SelectYear setValue={setYear} />
      </div>
      <Button className="select-button-engine" style={{ background: '#2a6662', border: '#2a6662'}} onClick={handleClick}>Guardar</Button>
      <br></br>
    </div>
  );
};

export default TaxFileComponent;
