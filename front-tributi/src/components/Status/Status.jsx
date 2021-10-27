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
}