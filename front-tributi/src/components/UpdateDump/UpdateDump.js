import React from 'react';
import 'antd/dist/antd.css';
import './UpdateDump.css';
import SelectButton from './SelectButton';

const UpdateDumpComponent = () => {
  return (
    <div className="box-dragg-file">
      <section className="title-update-dump">
        <p className="letter-title">
          Actualización
        </p>
      </section>
      <h1>¿Realizaste actualización de volcado?</h1>
      <div className="select-button">
        <SelectButton />
      </div>
    </div>
  )
}

export default UpdateDumpComponent