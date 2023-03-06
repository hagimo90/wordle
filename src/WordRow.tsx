const WORD_LENGTH = 5
interface WordRowProps {
  letters: string
}
interface CharacterBoxProps {
  value: string
}

export default function WordRow({ letters: lettersProp = '' }: WordRowProps) {
  const lettersRemaining = WORD_LENGTH - lettersProp.length
  const letters = lettersProp.split('').concat(Array(lettersRemaining).fill(''))
  return (
    <div className="my-2 grid grid-cols-5 gap-5">
      {letters.map((char) => (
        <CharacterBox key={char} value={char} />
      ))}
    </div>
  )
}
function CharacterBox({ value }: CharacterBoxProps) {
  return (
    <span className="mx-1 inline-block border border-gray-500 p-4 text-center text-2xl font-bold uppercase">
      {value}
    </span>
  )
}
