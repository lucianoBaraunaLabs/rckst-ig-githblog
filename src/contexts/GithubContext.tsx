import { ReactNode, createContext } from 'react'

interface GithubContextType {
  userName: string
  userImg: string
  bio: string
  info: {
    githubName: string
    githuUrl: string
    organization: string
    followers: string
  }
}

export const GithubContext = createContext({} as GithubContextType)

interface GithubProviderProps {
  children: ReactNode
}

export function GithubProvider({ children }: GithubProviderProps) {
  return (
    <GithubContext.Provider
      value={{
        userName: 'Luciano Baraúna',
        userImg: 'https://picsum.photos/500/500',
        bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, asperiores repellat accusantium voluptatum quod, amet repudiandae, labore ea nisi repellendus quasi! Corporis soluta quod dolores fuga adipisci dicta numquam accusamus?',
        info: {
          githubName: 'lucianobarauna',
          githuUrl: 'https://github.com/lucianobarauna',
          organization: 'organização',
          followers: '32',
        },
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
