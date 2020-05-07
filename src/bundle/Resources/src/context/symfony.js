import React, { createContext, useContext } from 'react'

const SymfonyContext = createContext()

export const SymfonyContextProvider = ({ value, children }) => (
  <SymfonyContext.Provider value={value}>{children}</SymfonyContext.Provider>
)

export const useSymfonyContext = () => useContext(SymfonyContext)
