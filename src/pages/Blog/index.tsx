import { Spinner } from '@/components/Spinner'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostsListContainer } from './styles'
import { Post } from './components/Post'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { AxiosResponse } from 'axios'

const organizaionName = import.meta.env.VITE_GITHUB_ORGANIZATIONNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

interface IPostResponse {
  items: IPost[]
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query = '') => {
      try {
        setIsLoading(true)
        const response = await api.get<unknown, AxiosResponse<IPostResponse>>(
          `/search/issues?q=${query}%20label:published%20repo:${organizaionName}/${repoName}`,
        )

        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [posts],
  )

  useEffect(() => {
    getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Spinner />
      ) : (
        <PostsListContainer>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </PostsListContainer>
      )}
    </>
  )
}
