/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const dadosIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

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

  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categorias';

    fetch(URL_TOP)
      .then(async (respostaServer) => {
        const resposta = await respostaServer.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (

    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(dadosIniciais);
      }}
      >

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

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria.id}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>

    </PageDefault>

  );
}

export default CadastroCategoria;
