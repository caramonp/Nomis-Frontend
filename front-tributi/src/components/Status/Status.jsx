import React, { useState, useEffect, useContext } from 'react'
import { Alert, Progress, Button } from 'antd';
import { useHistory } from "react-router-dom";
import firestore from '../../config/firebase';
import 'firebase/firestore'
import 'firebase/compat/firestore';
import './Status.css'
import Circle from './Circle';
import Context from '../../context';

const Status = () => {

  const context = useContext(Context);
  const {state, setState} = context;
  const {taxEngine, updateDump, mathops, lightweight, configuration} = state;
  const {changedLightweight} = lightweight;
  const {changedConfiguration} = configuration;
  const {stateLoading} = state;
  const [docs, setdocs] = useState([])
  const history = useHistory();

  const [percentTaxEngine, setPercentTaxEngine] = useState(0);
  const [percentDump, setPercentDump] = useState(0);
  const [percentMathops, setPercentMathops] = useState(0);
  const [percentlightweight, setPercentlightweight] = useState(0);
  const [percentConfig, setPercentConfig] = useState(0);

  let timer = null;

  const updateStatus = (status) => {
    setPercentTaxEngine(10)
    //console.log("percent tax", percentTaxEngine, valueEnd)
    //timer = setInterval(loading, 10000)
    /* switch(status) {
      case 'tax-engine': updateStatus(status)
    } */
  }
  
  const getDocument = async () => {
    firestore.collection('Status_upload_dump').onSnapshot((querySnapshot) => {
      const doct = []
      querySnapshot.forEach(doc => {
        console.log("documento", doc.data());
        console.log("value", valueEnd, state)
        const {status} = doc.data();
        updateStatus(status)
        
        //doct.push({ ...doc.data(), id: doc.id })
      });
      setdocs(doct)
    })
  }
  useEffect(() => {
    getDocument()
		/* setState({
      ...state, stateLoading: {}
    }) */
  }, []);

  useEffect(() => {
    console.log("percent tax engine desde useEffect", percentTaxEngine)
    timer = setTimeout(() => {
      setPercentTaxEngine(percentTaxEngine + 10)
    }, 1000)
    if (percentTaxEngine > 100){
      clearTimeout(timer);
    }
  }, [percentTaxEngine]);

  const back = () => {
    history.push('/');
  }

  const [valueEnd, setValueEnd] = React.useState(1);
  let TaxEngine = () => <Progress type="dashboard" percent={percentTaxEngine} status="active" gapDegree={0} format={() => 'Cargando archivo tax egine'} />
  let Dump = () => <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Actualizando dump'} />
  let Mathops = () => <Progress type="dashboard" percent={percentMathops} status="active" gapDegree={0} format={() => 'Actualizando mathops'} />
  let Lightweight = () => <Progress type="dashboard" percent={percentlightweight} status="active" gapDegree={0} format={() => 'Cargando archivo liviano'} />
  let Congif = () => <Progress type="dashboard" percent={percentConfig} status="active" gapDegree={0} format={() => 'Actualizando configuración'} />


    return (
      <div className="Status"> 
        <section className="title-Status">
        <p className="letter-title">
        Api Status
        </p>
      </section>
      <div>
        {taxEngine && <TaxEngine />}
        {updateDump && <Dump />}
        {mathops && <Mathops />}
      {changedLightweight && <Lightweight />}
      {changedConfiguration && <Congif />}
      </div>
        {/* {docs.map(dc => (
          <div className="Acceso-datos" key={dc.id}>
            <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Update File'} showInfo={true}/>
            {(() => {
              if (dc.DUMP === 'SI'){
                  return (
                      Dump
                  )
              }
            })()}
            {(() => {
              if (dc.MATHOPS === 'SI'){
                  return (
                      Mathops
                  )
              }
            })()}
            {(() => {
              if (dc.LIGHTWEIGHT === 'SI'){
                  return (
                    Lightweight
                  )
              }
            })()}
            <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Done'} />
             
            </div>
        ))} */}
        
        <div>
        <Button className="Button-back" style={{ background: '#ffff'}} type="primary" onClick={back}> Regresar</Button>
        </div>
        <div>
        <Button className="Button-Start" style={{ background: '#2a6662', border: '#2a6662' }} type="primary" onClick={() => setValueEnd(valueEnd + 10)}>Start</Button>
        </div>
        <div>
          {(() => {
              if (valueEnd < 100){
                  return (
                       <Circle/>
                  )
              }
          })()}
          {(() => {
              if (valueEnd === 111){
                return (
                   <Alert
                        message="Succes"
                        description="The Update Process Was Successful."
                        type="success"
                    showIcon
                    closable
                      />
                  )
              }
          })()}
          
        </div>
        </div>
      
    )
}
export default Status;
