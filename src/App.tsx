import WordRow from './WordRow'

export default function App() {
  return (
    <div className="mx-auto w-96">
      <header className="my-2 border-b border-gray-500 pb-2">
        <h1 className="text-center text-4xl">Reacdle</h1>
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
