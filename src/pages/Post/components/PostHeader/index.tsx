import { useNavigate } from 'react-router-dom'
import { ExternalLink } from '@/components/ExternalLink'
import { Spinner } from '@/components/Spinner'
// import { relativeDateFormatter } from '@/utils/formatter'
import { IPost } from '@/pages/Blog'
import { PostHeaderContainer } from './styles'
import {
  CalendarDots,
  CaretLeft,
  Chat,
  GithubLogo,
} from '@phosphor-icons/react'

interface PostHeaderProps {
  postData: IPost
  isLoading: boolean
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formattedDate = postData?.created_at

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternalLink
              as="button"
              onClick={goBack}
              icon={<CaretLeft size={32} />}
              text="Voltar"
              variant="iconLeft"
            />
            <ExternalLink
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>
          <ul>
            <li>
              <GithubLogo size={32} />
              {postData.user.login}
            </li>
            <li>
              <CalendarDots size={32} />
              {formattedDate}
            </li>
            <li>
              <Chat size={32} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  )
}
