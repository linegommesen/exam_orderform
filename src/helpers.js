export function setPrice(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
