import React from 'react';
import 'antd/dist/antd.css';
import './ConfigFile.css';
import SelectButton from './SelectButton';

const ConfigFileComponent = () => {
  return (
    <div className="box-dragg-file">
      <section className="title-update-dump">
        <p className="letter-title">
        Configuración
        </p>
      </section>
      <h2> Seleccione los cambios en la configuración</h2>
      <div className="select-button">
        <SelectButton />
      </div>
    </div>
  )
}

export default ConfigFileComponent
