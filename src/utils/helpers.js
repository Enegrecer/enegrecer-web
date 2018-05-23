export function cortarPalavra(value, maxLen) {
  const inputLen = window.parseInt(maxLen);
  // https://bit.ly/2KIPkBO
  const isNaN = Number.isNaN(Number(inputLen));
  return isNaN ? value : value.slice(0, inputLen);
}

function calculaIdade(dataNascimento) {
  const today = new Date();
  const birthDate = new Date(dataNascimento);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
}

export function temMenosDe29Anos(dataNascimento) {
  return calculaIdade(dataNascimento) <= 29;
}

export function obtemPorcentagemDeMulheres(total, totalMulheres) {
  let percentagem = (totalMulheres * 100) / total;
  percentagem = parseFloat(percentagem.toFixed(2));
  return percentagem;
}
