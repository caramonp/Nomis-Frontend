import { Progress } from 'antd';
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
  let file = <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Update File'} showInfo={true}/>
  let dumps = <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Update Dumps'} />
  let mathops = <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Mathops'} />
  let ligero = <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'File Ligero'} />


    return (
      <div className="Status"> 
        <h1 className="title-Status"> Api Status</h1>
        {docs.map(dc => (
          <div className="Acceso-datos"key={dc.id}>
            {(() => {
              if (dc.FILE === 'SI'){
                  return (
                      file
                  )
              }
            })()}
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
             
            </div>
        ))}
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <button onClick={() => setValueEnd(valueEnd + 10)}>Change valueEnd</button>
        <br />
        <div>
        <Circle/>
        
        </div>
        </div>
      
    )
}
export default Status;
