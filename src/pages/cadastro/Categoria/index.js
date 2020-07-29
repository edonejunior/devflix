import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';
import FormField from '../../../components/FormField';



function CadastroCategoria() {

  const [categorias, setCategorias] = useState([]);

  const dadosIniciais = {
    nome:'',
    descricao:'',
    cor:''
  };
  
  const [values, setValues] = useState(dadosIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]:valor, 
    })
  }

  function HandlerInput(info) {
    const {getAttribute, value} = info.target;

    setValue(
      getAttribute('name'), 
      value);
  }


  return (
     
       <PageDefault >
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={ function handleSubmit(event) {
          event.preventDefault();
          setCategorias([
            ...categorias, 
            values
          ]);

          setValues(dadosIniciais);

        } }>
          
          <FormField 
          label="Nome da Categoria"
            name="nome"
            type="text"
            value={values.nome}
            onChange={HandlerInput}

          />

          <FormField 
          label="Descrição"
            name="descricao"
            type="textarea"
            value={values.descricao}
            onChange={HandlerInput}

          />                
                    
          <FormField 
          label="Cor"
          name="cor"
          type="color"
            value={values.cor}
            onChange={HandlerInput}

          />

            <button>
              Cadastrar
            </button>
            
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria.nome}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
          Ir para a Home
        </Link>

       </PageDefault>
     
  );
}

export default CadastroCategoria;