import WordRow from './WordRow'

import { useState } from 'react'
import { useStore } from './store'
const GUESS_LENGTH = 6

export default function App() {
  const [guess, setGuess] = useState('')
  const store = useStore()
  const isGameOver = store.guesses.length === GUESS_LENGTH

  let rows = [...store.guesses] //, ...Array(numberOfGuessesReamining).fill('')
  if (rows.length < GUESS_LENGTH) {
    rows.push(guess)
  }
  const numberOfGuessesReamining = GUESS_LENGTH - rows.length
  rows = rows.concat(Array(numberOfGuessesReamining).fill(''))

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGuess = e.target.value
    if (newGuess.length === 5) {
      store.addGuess(newGuess)
      console.log(isGameOver)
      setGuess('')
      return
    }

    setGuess(newGuess)
  }

  return (
    <div className="relative mx-auto w-96">
      <header className="my-2 border-b border-gray-500 pb-2">
        <h1 className="text-center text-4xl">Reacdle</h1>
        <div>
          <input
            type="text"
            className="w-full border-2 border-gray-500 p-2"
            value={guess}
            placeholder="Put your guess here"
            onChange={inputOnChange}
            disabled={isGameOver}
          />
        </div>
      </header>
      <main className="grid grid-rows-6 gap-4">
        {rows.map((word, index) => (
          <WordRow key={index} letters={word} />
        ))}
      </main>
      {isGameOver && (
        <div
          role="modal"
          className="absolute inset-x-0 top-1/4 mx-auto w-3/4 rounded border border-gray-800 bg-white p-6 text-center"
        >
          Game Over!
          <button
            onClick={store.newGame}
            className="m-auto mt-4 block rounded border border-gray-800 bg-green-200 p-2 text-center shadow"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  )
}
