import { computeGuess, LetterState, WORD_LENGTH } from './word-utils'
import { useStore } from './store'
interface WordRowProps {
  letters: string
}
interface CharacterBoxProps {
  value: string
  state?: LetterState
}

export default function WordRow({ letters: lettersProp = '' }: WordRowProps) {
  const answer = useStore((state) => state.answer)
  const lettersRemaining = WORD_LENGTH - lettersProp.length
  let letters = lettersProp.split('')
  if (lettersRemaining > 0) {
    letters = letters.concat(Array(lettersRemaining).fill(''))
  }
  const guessStates = computeGuess(lettersProp, answer)
  return (
    <div className="grid grid-cols-5 gap-4">
      {letters.map((char, index) => (
        <CharacterBox key={index} value={char} state={guessStates[index]} />
      ))}
    </div>
  )
}
function CharacterBox({ value, state }: CharacterBoxProps) {
  const stateStyles = state == null ? '' : CharacterStateStyles[state]
  return (
    <div
      className={` mx-1 inline-block border border-gray-500 p-4 text-center text-2xl font-bold uppercase ${stateStyles}`}
    >
      {value}
    </div>
  )
}
const CharacterStateStyles = {
  [LetterState.Miss]: 'bg-gray-500',
  [LetterState.Present]: 'bg-yellow-500',
  [LetterState.Match]: 'bg-green-500'
}
