import WordRow from './WordRow'
import { useState } from 'react'
export default function App() {
  const [guess, setGuess] = useState('')
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
            onChange={(e) => setGuess(e.target.value)}
          />
        </div>
      </header>
      <main className="grid grid-rows-6 gap-4">
        <WordRow letters="Hello" />
        <WordRow letters="Hairy" />
        <WordRow letters="calme" />
        <WordRow letters="penny" />
        <WordRow letters="solar" />
        <WordRow letters="calme" />
      </main>
    </div>
  )
}
