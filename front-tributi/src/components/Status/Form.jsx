import 'firebase/compat/firestore';
import React, {useState} from 'react'



const Form = (props) => {
  

  const initialStateValues = {
    status: "",
   };
  
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  }
	
	return (
    <form className="col-xs-3 center-block " onSubmit={ handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input

          type="text"
          placeholder="Añade Status"
          name="status"
          onChange={handleInputChange}
          value={values.status}
        />
      </div>
            <button className="btn btn-primary center-block ">
        Save
      </button>
    </form>
  );
};

export default  Form;
