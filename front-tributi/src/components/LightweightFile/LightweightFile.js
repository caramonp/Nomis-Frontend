import React from 'react';
import 'antd/dist/antd.css';
import './LightweightFile.css';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const LightweightFile = {
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
const LightweightFileComponent = () => {
  return (
    <div className="box-dragg-file">
      <section className="title-tax-engine">
        <p className="letter-title">
          Carga el archivo Tax Engine liviano
        </p>
      </section>
      <hr />
      <Dragger {...LightweightFile}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Si realizaste cambios en el Tax Engine liviano cargalo aqui</p>
      <p className="ant-upload-hint">
        Este espacio es específico para el Tax Engine liviano .xlsx
      </p>
    </Dragger>
    </div>
  )
}


export default LightweightFileComponent
