/* eslint-disable linebreak-style */
import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
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
  create,
};
