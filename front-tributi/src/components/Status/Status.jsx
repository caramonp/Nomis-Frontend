import { Progress } from 'antd';
import React, { useState, useEffect}from 'react'
import firestore from '../../config/firebase';
import 'firebase/firestore'
import 'firebase/compat/firestore';
import './Status.css'


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
  let file = <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Update File'} showInfo={true} />
  let dumps = <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Update Dumps'} />
  let mathops = <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Mathops'} />
  let ligero = <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'File Ligero'} />
}