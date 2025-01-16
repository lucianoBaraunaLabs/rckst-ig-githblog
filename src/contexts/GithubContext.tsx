import { api } from '@/lib/axios'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface GithubInfoUser {
  login: string
  name: string
  bio: string
  avatarUrl: string
  htmlUrl: string
  company: string
  followers: string
}

export interface AppLoading {
  infoUser: boolean
  posts: boolean
}

interface GithubContextType {
  infoUser: GithubInfoUser
  loading: AppLoading
}

export const GithubContext = createContext({} as GithubContextType)

interface GithubProviderProps {
  children: ReactNode
}

const userName = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export const GithubProvider = ({ children }: GithubProviderProps) => {
  const [isLoading, setIsLoading] = useState<AppLoading>({
    infoUser: true,
    posts: true,
  })

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
      setIsLoading((state) => {
        return {
          ...state,
          infoUser: true,
        }
      })
      const response = await api.get(`/users/${userName}`)
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
    } finally {
      setIsLoading((state) => {
        return {
          ...state,
          infoUser: false,
        }
      })
    }
  }

  const fetchPosts = async (query = '') => {
    try {
      setIsLoading((state) => {
        return {
          ...state,
          posts: true,
        }
      })
      const response = await api.get(
        `https://api.github.com/search/issues?q=${query}%20repo:${repoName}`,
      )
      console.log(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading((state) => {
        return {
          ...state,
          posts: false,
        }
      })
    }
  }

  useEffect(() => {
    fetchGitUser()
    fetchPosts()
  }, [])

  return (
    <GithubContext.Provider
      value={{
        infoUser: githubInfo,
        loading: isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export const useGithubApi = () => {
  const context = useContext(GithubContext)
  if (!context) {
    throw new Error('useGithubApi must be used within an GithubProvider')
  }

  return context
}
