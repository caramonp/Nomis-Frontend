import firestore from '../../config/firebase';
import 'firebase/compat/firestore';
import { collection, addDoc } from "firebase/firestore";

import React from 'react'

const AddingCollection = () => {
	try {
  const docRef = addDoc(collection(firestore, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
	return (
		<div>
			
		</div>
	)
}

export default AddingCollection;
