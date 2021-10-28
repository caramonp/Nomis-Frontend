import React from 'react';
import 'antd/dist/antd.css';
import './TaxFile.css';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import SelectYear from './SelectYear';
import SelectBoton from './SelectBoton';


const { Dragger } = Upload;

const TaxFile = {
  
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

  onFileUpload () {
  
    

    /* fetch(
			'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
			{
				method: 'POST',
				body: formData,
			}
		)
  .then((response) => response.json())
  .then((result) => {
    console.log('Success:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  }); */
  },
};


const TaxFileComponent = () => {
  return (
    <div className="box-dragg-file">
      <section className="title-tax-engine">
        <p className="letter-title">
          Carga el archivo Tax Engine
        </p>
      </section>
      <hr />
      <h1>¿Realizaste alguna modificación en el tax engine?</h1>
      <div className="select-botton">
        <SelectBoton />
      </div>
      <br></br>
      <Dragger {...TaxFile}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Has click o arrastra en esta area el archivo que deseas cargar</p>
      <p className="ant-upload-hint">
        Si modificaste el Tax Engine subi el archivo
      </p>
    </Dragger>
    <br></br>
    <div className="select-year">
      <SelectYear />
    </div>
    <br></br>
    </div>
  )
}


export default TaxFileComponent
