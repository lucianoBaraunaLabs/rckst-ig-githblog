import * as S from './styles.ts'
import {
  ArrowSquareOut,
  Buildings,
  CaretLeft,
  GithubLogo,
  Users,
} from 'phosphor-react'
import { HeaderProps } from './types.ts'
import { useContext } from 'react'
import { GithubContext } from '@/contexts/GithubContext.tsx'

export function Header({ isHeaderPost }: HeaderProps) {
  const { userName, userImg, bio, info } = useContext(GithubContext)
  return (
    <S.Wrapper isHeaderPost={isHeaderPost}>
      {!isHeaderPost ? (
        <S.ImgProfile src={userImg} alt="Imagem aqui" />
      ) : (
        <S.WrapperPost>
          <S.Link to="/">
            <CaretLeft />
            VOLTAR
          </S.Link>
          <S.Anchor href="">
            VER NO GITHUB <ArrowSquareOut weight="bold" />
          </S.Anchor>
        </S.WrapperPost>
      )}
      <S.Content>
        <S.Title>
          {!isHeaderPost ? (
            <>
              {userName}
              <S.Anchor href={info.githuUrl}>
                GITHUB <ArrowSquareOut weight="bold" />
              </S.Anchor>
            </>
          ) : (
            <>Título do post aqui</>
          )}
        </S.Title>

        {!isHeaderPost && <S.Text>{bio}</S.Text>}
        <S.List>
          <S.ListItem>
            <GithubLogo weight="bold" />
            <p>{info.githubName}</p>
          </S.ListItem>
          <S.ListItem>
            <Buildings weight="bold" />
            <p>{info.organization}</p>
          </S.ListItem>
          <S.ListItem>
            <Users weight="bold" />
            <p>{info.followers} seguidores</p>
          </S.ListItem>
        </S.List>
      </S.Content>
    </S.Wrapper>
  )
}
