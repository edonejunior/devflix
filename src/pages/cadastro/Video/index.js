/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const { HandlerInput, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasDoServer) => {
        setCategorias(categoriasDoServer);
      });
  }, []);

  return (

    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        // eslint-disable-next-line max-len
        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >

        <FormField
          label="Titulo do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={HandlerInput}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={HandlerInput}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={HandlerInput}
        />

        <button type="submit">
          Cadastrar
        </button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

    </PageDefault>

  );
}

export default CadastroVideo;
