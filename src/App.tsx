import WordRow from './WordRow'

export default function App() {
  return (
    <div className="mx-auto w-96">
      <header className="my-2 border-b border-gray-500 pb-2">
        <h1 className="text-center text-4xl">Reacdle</h1>
      </header>
      <main>
        <WordRow letters="Hel" />
        <WordRow letters="Hels" />
        <WordRow letters="Helsr" />
      </main>
    </div>
  )
}
