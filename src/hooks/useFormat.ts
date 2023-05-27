import React from 'react'

export const useCapitalizeFirstLetter = (word: string) => {
  const firstLetter = word.charAt(0).toUpperCase()

  const remainingLetters = word.slice(1)

  const capitalizedWord = firstLetter + remainingLetters

  return capitalizedWord
}