/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

/* import { Container } from './styles'; */

function CadastroVideo() {
  return (

    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

    </PageDefault>

  );
}

export default CadastroVideo;
