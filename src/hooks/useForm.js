/* eslint-disable linebreak-style */
import { useState } from 'react';

function useForm(dadosIniciais) {
  const [values, setValues] = useState(dadosIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function HandlerInput(info) {
    setValue(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }

  function clearForm() {
    setValues(dadosIniciais);
  }

  return {
    values,
    HandlerInput,
    clearForm,
  };
}

export default useForm;
