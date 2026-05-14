import { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({ name:'', email:''});

  const [errors, setErrors] = useState({});

  const validate =()=>{
    const newErrors ={};

    if(!formData.name.trim()){
      newErrors.name ='Name is required';
    }
    return newErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault(); //we are disabling the default behaviour of the browser on submitting the form the page reloads
   
    const validationErrors =validate();

    if(Object.keys(validationErrors).length > 0){
      setErrors(validationErrors);

    }else{
      console.log('Form data is submitted', formData);

    }
  };

  const handleChange = (e) => {
    const{name, value} =e.target;
    console.log(formData.name);

    setFormData({
      ...formData, //with this spread operator we are specifying that keep the existing values of the form data
      //getting the name of the field
      [e.target.name]: e.target.value, //getting the value you have typed in
    });

    if(errors[name]){
      const newErrors ={...errors};
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <h1>Forms in React</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input onChange={handleChange} 
          type='text'
          name='name'
          value={formData.name} />

          {errors.name && <span style={{color:'red'}}>{errors.name}</span>}
        </label> <br />

        <label>
          Email:
          <input onChange={handleChange} 
          type='email' 
          name='email'
          value={formData.email} />
        </label> <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
