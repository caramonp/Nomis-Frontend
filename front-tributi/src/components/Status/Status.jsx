import { Alert, Progress } from 'antd';
import React, { useState, useEffect}from 'react'
import firestore from '../../config/firebase';
import 'firebase/firestore'
import 'firebase/compat/firestore';
import './Status.css'
import Circle from './Circle';


export const Status = (props) => {

  const [docs, setdocs] = useState([])

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

  const [valueEnd, setValueEnd] = React.useState(1);
  let dumps = <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Update Dumps'} />
  let mathops = <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Mathops'} />
  let ligero = <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Lightweight File'} />


    return (
      <div className="Status"> 
        <h1 className="title-Status"> Api Status</h1>
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
        <button className="Button-Start" onClick={() => setValueEnd(valueEnd + 10)}>Start</button>
        <br />
        <div>
          {(() => {
              if (valueEnd < 100){
                  return (
                       <Circle/>
                  )
              }
          })()}
          {(() => {
              if (valueEnd == 111){
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
