import { Outlet, useParams } from 'react-router-dom'
import GithubLogoImg from '@/assets/images/logo.svg'
import GithubBackground from '@/assets/images/background-tech.jpg'
import * as S from './styles.ts'
import { Header } from '@/components/Header/index.tsx'

export function DefaultLayout() {
  const { idPost } = useParams()
  const hasPagePost = idPost !== undefined

  return (
    <>
      <S.WrapperBackground>
        <S.ImgGithubBackground src={GithubBackground} aria-hidden />
        <S.ImgGithubLogo src={GithubLogoImg} alt="Github Blog" />
      </S.WrapperBackground>
      <S.Content>
        <Header isHeaderPost={hasPagePost} />
        <S.WrapperOutlet>
          <Outlet />
        </S.WrapperOutlet>
      </S.Content>
    </>
  )
}
