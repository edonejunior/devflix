/* eslint-disable linebreak-style */
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaServer) => {
      if (respostaServer.ok) {
        const resposta = await respostaServer.json();

        return resposta;
      }

      throw new Error('Não foi possível pegar os dados:(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaServer) => {
      if (respostaServer.ok) {
        const resposta = await respostaServer.json();

        return resposta;
      }

      throw new Error('Não foi possível pegar os dados:(');
    });
}

function createCategory(objetoDoVideo) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (respostaServer) => {
      if (respostaServer.ok) {
        const resposta = await respostaServer.json();

        return resposta;
      }

      throw new Error('Não foi possível pegar os dados:(');
    });
}

export default {
  getAllWithVideos,
  getAll,
  createCategory,
};
