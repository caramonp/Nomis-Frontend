/*import { useState, useEffect } from 'react'
import firestore from '../../config/firebase';
import 'firebase/firestore'
import 'firebase/compat/firestore';

const Status = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		firestore.collection('books')
			.get()
			.then(querySnapshot => {
				const books = [];
				querySnapshot.forEach(doc => {
					books.push(doc.data());
				});
				setData([...books]);
			});
	}, []);

		return (<div>
			<h1>lista de libros</h1>
			{data.length ? (
				data.map(book => (
					<article key={book.id}>
						<h2>{book.tittle}</h2>
						<h3>{book.author}</h3>
					</article>
				))
			) : (
				<p>Cargando Coleccion</p>
			)}
		</div>
		);
	}
export default Status;*/
