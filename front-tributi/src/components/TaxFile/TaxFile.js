import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './TaxFile.css';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import SelectYear from './SelectYear';
import Select from 'rc-select';

const { Dragger } = Upload;

const TaxFile = {
  name: 'file',
  multiple: true,
  action: 'https://run.mocky.io/v3/e6d84e3d-f56e-4322-a2b4-7becaf0bb06a',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
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
      <Dragger {...TaxFile}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Has click o arrastra en esta area el archivo que deseas cargar</p>
      <p className="ant-upload-hint">
        Este espacio es específico para el Tax Engine .xlsx
      </p>
    </Dragger>
    <div className="select-year">
      <SelectYear />
    </div>
    </div>
  )
}


export default TaxFileComponent
