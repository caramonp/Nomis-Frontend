<<<<<<< HEAD
import { useState, useEffect } from 'react'
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
export default Status;
=======
import { Steps, Button, message } from 'antd';
import React from 'react'
import AddingCollection from './AddingCollection';
import ShowCollection from './ShowCollection';

const { Step } = Steps;



const steps = [
  {
    title: 'Agregando Documentos',
    content: <AddingCollection/>,
  },
  {
    title: 'Second',
    content: <ShowCollection/>,
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

const StatusComponent = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default StatusComponent;
>>>>>>> develop
