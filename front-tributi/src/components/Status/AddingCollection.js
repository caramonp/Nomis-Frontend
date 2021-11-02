import firestore from '../../config/firebase'
import 'firebase/compat/firestore';
import React from 'react'
import Form from './Form';

const AddingCollection = () => {

	const addOrEdit = async (Object) => {
		await firestore.collection('Status_upload_dump').doc("status").set(Object)
		alert("Se creo documento correctamente")	
	}
	

	return <div>
		<Form addOrEdit={addOrEdit} />
	</div>
}

export default AddingCollection;
