import { describe, expect, it } from 'vitest'
import { getRandomWord, computeGuess, LetterState } from './word-utils'

describe('word-utils', () => {
  it('random word', () => {
    expect(getRandomWord()).toBeTruthy()
    expect(getRandomWord().length).toEqual(5)
  })
})
describe('compute-guess', () => {
  it('works with match , present and miss', () => {
    expect(computeGuess('bonxy', 'boxyt')).toEqual([
      LetterState.Match,
      LetterState.Match,
      LetterState.Miss,
      LetterState.Present,
      LetterState.Present
    ])
  })
  it('works with all matchs', () => {
    expect(computeGuess('bonxy', 'bonxy')).toEqual([
      LetterState.Match,
      LetterState.Match,
      LetterState.Match,
      LetterState.Match,
      LetterState.Match
    ])
  })
  it('works with all presents', () => {
    expect(computeGuess('ybonx', 'bonxy')).toEqual([
      LetterState.Present,
      LetterState.Present,
      LetterState.Present,
      LetterState.Present,
      LetterState.Present
    ])
  })
  it('works with all misses', () => {
    expect(computeGuess('abcde', 'fghij')).toEqual([
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss
    ])
  })

  it('only one match when two letters are present', () => {
    expect(computeGuess('boost', 'colir')).toEqual([
      LetterState.Miss,
      LetterState.Match,
      LetterState.Miss,
      LetterState.Miss,
      LetterState.Miss
    ])
  })
})
