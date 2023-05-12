import * as S from './styles.ts'
import {
  ArrowSquareOut,
  Buildings,
  CaretLeft,
  GithubLogo,
  Users,
} from 'phosphor-react'
import { HeaderProps } from './types.ts'
// import { Link } from 'react-router-dom'

export function Header({ isHeaderPost }: HeaderProps) {
  return (
    <S.Wrapper headerPost={isHeaderPost}>
      {!isHeaderPost ? (
        <S.ImgProfile src="https://picsum.photos/500/500" alt="Imagem aqui" />
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
              Luciano Baraúna{' '}
              <S.Anchor href="#">
                GITHUB <ArrowSquareOut weight="bold" />
              </S.Anchor>
            </>
          ) : (
            <>Título do post aqui</>
          )}
        </S.Title>

        {!isHeaderPost && (
          <S.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            asperiores repellat accusantium voluptatum quod, amet repudiandae,
            labore ea nisi repellendus quasi! Corporis soluta quod dolores fuga
            adipisci dicta numquam accusamus?
          </S.Text>
        )}
        <S.List>
          <S.ListItem>
            <GithubLogo weight="bold" />
            <p>lucianobarauna</p>
          </S.ListItem>
          <S.ListItem>
            <Buildings weight="bold" />
            <p>organização</p>
          </S.ListItem>
          <S.ListItem>
            <Users weight="bold" />
            <p>32 seguidores</p>
          </S.ListItem>
        </S.List>
      </S.Content>
    </S.Wrapper>
  )
}
