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
  const {state} = context;
  const [docs, setdocs] = useState([])
  const history = useHistory();
  console.log("estado", state)

  const getDocument = async () => {
    firestore.collection('Prueba_nomis').onSnapshot((querySnapshot) => {
      const doct = []
      querySnapshot.forEach(doc => {
        doct.push({ ...doc.data(), id: doc.id })
      });
      setdocs(doct)
    })
  }
  useEffect(() => {
    getDocument()
		
  }, []);

  const back = () => {
    history.push('/');
  }

  const [valueEnd, setValueEnd] = React.useState(1);
  let dumps = <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Update Dumps'} />
  let mathops = <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Mathops'} />
  let ligero = <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Lightweight File'} />


    return (
      <div className="Status"> 
        <section className="title-Status">
        <p className="letter-title">
        Api Status
        </p>
      </section>
        {docs.map(dc => (
          <div className="Acceso-datos" key={dc.id}>
            <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Update File'} showInfo={true}/>
            {(() => {
              if (dc.DUMP === 'SI'){
                  return (
                      dumps
                  )
              }
            })()}
            {(() => {
              if (dc.MATHOPS === 'SI'){
                  return (
                      mathops
                  )
              }
            })()}
            {(() => {
              if (dc.LIGHTWEIGHT === 'SI'){
                  return (
                      ligero
                  )
              }
            })()}
            <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Done'} />
             
            </div>
        ))}
        
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
