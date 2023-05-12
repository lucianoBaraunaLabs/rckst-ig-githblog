import { ReactNode, createContext } from 'react'

export const GithubContext = createContext({})

interface GithubProviderProps {
  children: ReactNode
}

export function GithubProvider({ children }: GithubProviderProps) {
  return <GithubContext.Provider value="">{children}</GithubContext.Provider>
}
