import React from 'react';
import 'antd/dist/antd.css';
import './UpdateDump.css';
import { Button } from 'antd';

const UpdateDumpComponent = () => {
  return (
    <div className="box-dragg-file">
      <section className="title-update-dump">
        <p className="letter-title">
          Actualización
        </p>
      </section>
    <Button type="primary">Si</Button>
    <Button>No</Button>
    </div>
  )
}

export default UpdateDumpComponent