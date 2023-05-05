import { Outlet } from 'react-router-dom'
import GithubLogo from '@/assets/images/logo.svg'
import GithubBackground from '@/assets/images/background-tech.jpg'
import * as S from './styles.ts'

export function DefaultLayout() {
  return (
    <>
      <S.WrapperBackground>
        <S.ImgGithubBackground src={GithubBackground} aria-hidden />
        <S.ImgGithubLogo src={GithubLogo} alt="Github Blog" />
      </S.WrapperBackground>
      <S.Content>
        <S.Header>
          <img src="" alt="Imagem aqui" />
          <div>
            <div>
              <h2>
                Luciano Baraúna <a href="#">Github</a>
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              asperiores repellat accusantium voluptatum quod, amet repudiandae,
              labore ea nisi repellendus quasi! Corporis soluta quod dolores
              fuga adipisci dicta numquam accusamus?
            </p>
            <ul>
              <li>github name</li>
              <li>organização</li>
              <li>seguidores</li>
            </ul>
          </div>
        </S.Header>
        <S.WrapperOutlet>
          <Outlet />
        </S.WrapperOutlet>
      </S.Content>
    </>
  )
}
