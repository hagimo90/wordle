import dict from './dict.json'

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * dict.length)

  return dict[randomIndex]
}

export enum LetterState {
  Miss,
  Present,
  Match
}
export function computeGuess(
  guess: string,
  answerString: string
): LetterState[] {
  const guessArray = guess.split('')
  const answerArray = answerString.split('')
  const result: LetterState[] = []

  guessArray.forEach((letter, index) => {
    if (letter === answerArray[index]) {
      result.push(LetterState.Match)
    } else if (answerArray.includes(letter)) {
      result.push(LetterState.Present)
    } else {
      result.push(LetterState.Miss)
    }
  })
  return result
}
