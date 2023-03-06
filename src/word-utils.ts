import dict from './dict.json'

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * dict.length)
  console.log(dict.length)
  return dict[randomIndex]
}
