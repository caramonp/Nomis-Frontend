import React from 'react';
import 'antd/dist/antd.css';
import './LightweightFile.css';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import SelectBoton from './SelectBoton';

const { Dragger } = Upload;

const LightweightFile = {
  name: 'file',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
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
        console.log(this.state.selectedFile);
      message.success(`${info.file.name} file uploaded successfully.`);
   } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
const LightweightFileComponent = () => {
  return (
    <div className="box-dragg-file">
      <section className="title-tax-engine">
        <p className="letter-title">
          Carga el archivo Tax Engine liviano
        </p>
      </section>
      <hr />
      <h1>¿Realizaste alguna modificación en archivo liviano?</h1>
      <div className="select-botton">
        <SelectBoton />
      </div>
      <br></br>
      <Dragger {...LightweightFile} type="file" ID="fileSelect" accept=".xlsx, .xls, .csv">
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Si realizaste cambios en el Tax Engine liviano cargalo aqui</p>
      <p className="ant-upload-hint">
        Este espacio es específico para el Tax Engine liviano .xlsx
      </p>
    </Dragger>
    <br></br>
    </div>
  )
}


export default LightweightFileComponent
