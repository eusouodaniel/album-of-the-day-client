import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log('O aplicativo está rodando.');
    },
    cached() {
      console.log('O aplicativo está rodando com base no cache.');
    },
    updated() {
      console.log('Novo conteúdo disponível; Por favor recarregue.');
    },
    offline() {
      console.log('Sem conexão com a internet. Aplicativo rodando offline.');
    },
    error(error) {
      console.error('Houve um erro :(:', error);
    },
  });
}
