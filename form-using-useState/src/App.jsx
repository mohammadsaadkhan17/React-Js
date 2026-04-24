import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    text: "",
    checkbox: false,
    radio: "",
    select: "",
  });

  const handleChange = (e) => {
    const{name, value, type, checked} =e.target; //Destructuring elements into individual data

    setFormData({
      ...formData, 
      [name]: type === 'checkbox' ? checked : value
  });

  };

  return (
    <div className="form-container">
      <h2>Form Example</h2>

      <form>
        {/* text input */}

        <div className="form-field">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Text"
            name="text"
            value={formData.text}
            onChange={handleChange}>
          </input>
           </div>
          {/* Checkbox */}

          <label>
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}>
            </input>
            Checkbox
          </label>

           {/* Radio */}
        <div>
        {/* <label>
        <input type='radio'
         name='radio'
         checked ={formData.radio}
         onChange={handleChange}>
         </input>
        Radio:</label> */}

        <label>Radio:</label>
        

        
        <label>
        <input type='radio'
         name='radio'
         value='Option1'
         checked ={formData.radio ==='Option1'}
         onChange={handleChange}>
         </input>
        Option 1</label>
        

         
        <label>
        <input type='radio'
         name='radio'
         value='Option2'
         checked ={formData.radio ==='Option2'}
         onChange={handleChange}>
         </input>
        Option 2</label>
        </div>

        <div>
          <label>Dropdown:</label>
        <select 
        name="select" 
        value={formData.select}
        onChange={handleChange}>


        <option value="">Choose an option</option>
        <option value="frontend">Front-end</option>
        <option value="backend">Back-end</option>
        </select>

        <div className="form-data">
          <h3>Form Data</h3>
          <p><strong>Name:</strong>{formData.text || 'NA'}</p>
          <p><strong>Checkbox:</strong>{formData.checkbox ? 'Checked' : 'Unchecked'}</p>
          <p><strong>Radio:</strong>{formData.radio || 'NA'}</p>
          <p><strong>Select:</strong>{formData.select || 'NA'}</p>

        </div>
        </div>
      </form>
    </div>
  );
}

export default App;
