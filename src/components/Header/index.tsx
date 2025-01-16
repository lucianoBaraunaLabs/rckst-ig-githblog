import * as S from './styles.ts'
import {
  ArrowSquareOut,
  Buildings,
  CaretLeft,
  GithubLogo,
  Users,
} from 'phosphor-react'
import { HeaderProps } from './types.ts'
import { useGithubApi } from '@/contexts/GithubContext.tsx'

export function Header({ isHeaderPost }: HeaderProps) {
  const { infoUser, loading } = useGithubApi()

  return (
    <S.Wrapper isHeaderPost={isHeaderPost}>
      {loading.infoUser && <>carregando...</>}
      {!isHeaderPost ? (
        <S.ImgProfile src={infoUser.avatarUrl} alt="Imagem aqui" />
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
              {infoUser.name}
              <S.Anchor href={infoUser.htmlUrl}>
                GITHUB <ArrowSquareOut weight="bold" />
              </S.Anchor>
            </>
          ) : (
            <>Título do post aqui</>
          )}
        </S.Title>

        {!isHeaderPost && <S.Text>{infoUser.bio}</S.Text>}
        <S.List>
          <S.ListItem>
            <GithubLogo weight="bold" />
            <p>{infoUser.login}</p>
          </S.ListItem>
          <S.ListItem>
            <Buildings weight="bold" />
            <p>{infoUser.company}</p>
          </S.ListItem>
          <S.ListItem>
            <Users weight="bold" />
            <p>{infoUser.followers} seguidores</p>
          </S.ListItem>
        </S.List>
      </S.Content>
    </S.Wrapper>
  )
}
