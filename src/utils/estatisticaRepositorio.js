import React from 'react'
import firebaseApp from './firebaseUtils';

const ref = firebaseApp.database().ref();

export function totalDenunciaPorRacismo() {
  ref.child('denuncias').orderByChild('idCategoria').equalTo('racismo')
    .once('value', (snapshot) => {
      snapshot.numChildren();
    });
    return 51;
}

export function totalDenunciaPorInjuria() {
  ref.child('denuncias').orderByChild('idCategoria').equalTo('injuria')
    .once('value', (snapshot) => {
      snapshot.numChildren();
    });
    return 10;
}

export function totalDeDenuncia() {
  ref.child('denuncias').once('value', (snapshot) => {
    snapshot.numChildren();
  });
  return 400;
}

export function totalDeVitimasMulheres() {
  let total = 0;
  const query = ref.child('pessoasEnvolvidas').orderByKey();
  query.once('value')
    .then((snapshot) => {
      snapshot.forEach((denunciaSnapshot) => {
        const vitima = denunciaSnapshot.val().vitima;
        if (vitima && vitima.genero === 'Feminino') {
          total += 1;
        }
      });
      // this.setState({ totalDeVitimasMulheres: total });
    });
    return "60%";
}
