import { Outlet } from 'react-router-dom'
import GithubLogoImg from '@/assets/images/logo.svg'
import GithubBackground from '@/assets/images/background-tech.jpg'
import * as S from './styles.ts'
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'

export function DefaultLayout() {
  return (
    <>
      <S.WrapperBackground>
        <S.ImgGithubBackground src={GithubBackground} aria-hidden />
        <S.ImgGithubLogo src={GithubLogoImg} alt="Github Blog" />
      </S.WrapperBackground>
      <S.Content>
        <S.Header>
          <S.HeaderImg src="https://picsum.photos/500/500" alt="Imagem aqui" />
          <S.HeaderContent>
            <S.HeaderTitle>
              Luciano Baraúna{' '}
              <S.GithubLink href="#">
                GITHUB <ArrowSquareOut weight="bold" />
              </S.GithubLink>
            </S.HeaderTitle>
            <S.HeaderTxt>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              asperiores repellat accusantium voluptatum quod, amet repudiandae,
              labore ea nisi repellendus quasi! Corporis soluta quod dolores
              fuga adipisci dicta numquam accusamus?
            </S.HeaderTxt>
            <S.HeaderList>
              <S.HeaderListItem>
                <GithubLogo weight="bold" />
                <p>lucianobarauna</p>
              </S.HeaderListItem>
              <S.HeaderListItem>
                <Buildings weight="bold" />
                <p>organização</p>
              </S.HeaderListItem>
              <S.HeaderListItem>
                <Users weight="bold" />
                <p>32 seguidores</p>
              </S.HeaderListItem>
            </S.HeaderList>
          </S.HeaderContent>
        </S.Header>
        <S.WrapperOutlet>
          <Outlet />
        </S.WrapperOutlet>
      </S.Content>
    </>
  )
}
