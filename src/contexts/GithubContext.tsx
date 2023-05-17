import { api } from '@/lib/axios'
import { ReactNode, createContext, useEffect, useState } from 'react'

export interface GithubInfoUser {
  login: string
  name: string
  bio: string
  avatarUrl: string
  htmlUrl: string
  company: string
  followers: string
}

interface GithubContextType {
  info: GithubInfoUser
}

export const GithubContext = createContext({} as GithubContextType)

interface GithubProviderProps {
  children: ReactNode
}

export function GithubProvider({ children }: GithubProviderProps) {
  const [githubInfo, setGithubInfo] = useState<GithubInfoUser>({
    login: '',
    name: '',
    bio: '',
    avatarUrl: '',
    htmlUrl: '',
    company: '',
    followers: '',
  })

  const fetchGitUser = async () => {
    try {
      const response = await api.get('/users/lucianobarauna')
      const {
        login,
        name,
        bio,
        avatar_url: avatarUrl,
        html_url: htmlUrl,
        company,
        followers,
      } = response.data

      setGithubInfo({
        login,
        name,
        bio,
        avatarUrl,
        htmlUrl,
        company,
        followers,
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchGitUser()
  }, [])

  return (
    <GithubContext.Provider
      value={{
        info: githubInfo,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
