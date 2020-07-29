import React from 'react';

// import { Container } from './styles';

function FormField({ label, name, type , value, HandlerInput}) {



  return (
    <div>

        <label>
        {label} : 
        <input
            type={type}
            name={name}
            value={value}
            onChange={HandlerInput}

        />
        </label>
  </div>
  
  );
}

export default FormField;