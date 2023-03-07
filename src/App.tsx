import WordRow from './WordRow'

import { useState } from 'react'
import { useStore } from './store'
const GUESS_LENGTH = 6

export default function App() {
  const [guess, setGuess] = useState('')
  const store = useStore()

  let rows = [...store.guesses] //, ...Array(numberOfGuessesReamining).fill('')
  if (rows.length < GUESS_LENGTH) {
    rows.push(guess)
  } else if (rows.length === GUESS_LENGTH) {
    useStore.persist.clearStorage()
  }
  const numberOfGuessesReamining = GUESS_LENGTH - rows.length
  rows = rows.concat(Array(numberOfGuessesReamining).fill(''))

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGuess = e.target.value
    if (newGuess.length === 5) {
      store.addGuess(newGuess)
      setGuess('')
      return
    }
    setGuess(newGuess)
  }

  return (
    <div className="mx-auto w-96">
      <header className="my-2 border-b border-gray-500 pb-2">
        <h1 className="text-center text-4xl">Reacdle</h1>
        <div>
          <input
            type="text"
            className="w-full border-2 border-gray-500 p-2"
            value={guess}
            placeholder="Put your guess here"
            onChange={inputOnChange}
          />
        </div>
      </header>
      <main className="grid grid-rows-6 gap-4">
        {rows.map((word, index) => (
          <WordRow key={index} letters={word} />
        ))}
      </main>
    </div>
  )
}
