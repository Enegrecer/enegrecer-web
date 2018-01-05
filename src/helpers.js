export function cortarPalavra(value, maxLen) {
  const inputLen = window.parseInt(maxLen);
  return isNaN(inputLen) ? value : value.slice(0, inputLen)
}
