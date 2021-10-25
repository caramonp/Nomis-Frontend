import  { useState, useEffect } from 'react'
import firestore from '../../config/firebase';
import 'firebase/firestore'
import 'firebase/compat/firestore';

export const ShowCollection = () => {


	const [docs, setdocs] = useState([])

	const getDocument = async() => {
		firestore.collection('links').onSnapshot((querySnapshot) => {
			const doct = []
			querySnapshot.forEach(doc => {
				doct.push({...doc.data(), id:doc.id})
			});
			setdocs(doct)
		})
	}

	useEffect(() => {
		getDocument()
		
	},[]);



	return (
		<div className="row hv-100 justify-content-center">
			{docs.map(dc => (
				<div className="card mb-1" key={dc.id}>
					<div className="card-body">
						<h4>Nombre de Documento </h4>
						<h1>{dc.documento}</h1>
						<p><strong>Id:</strong>  { dc.id}</p>
						<p><strong>Key:</strong> {dc.key}</p>
						<p><strong>Value:</strong> {dc.value}</p>
						

					</div>
				</div>
			)
				
			)}
		</div>
	)
}

export default ShowCollection;
