import React, { createContext } from 'react'

const FragranceContext = createContext();

export function FragranceProvider({ children }) {
  return (
    <FragranceContext.Provider value={{ testItem: 1 }}></FragranceContext.Provider>
  )
}

export default FragranceContext;
