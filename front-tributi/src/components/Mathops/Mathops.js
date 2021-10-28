import React from 'react';
import 'antd/dist/antd.css';
import './Mathops.css';
import SelectButton from './SelectButton';

const MathopsComponent = () => {
  return (
    <div className="box-dragg-file">
      <section className="title-update-dump">
        <p className="letter-title">
        Generar mathops
        </p>
      </section>
      <h2>¿Generaste Mathops?</h2>
      <div className="select-button">
        <SelectButton />
      </div>
    </div>
  )
}

export default MathopsComponent
