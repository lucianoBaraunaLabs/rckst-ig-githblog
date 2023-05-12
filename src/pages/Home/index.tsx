import { Card } from './components/Cards'
import * as S from './styles'

export function Home() {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.HeaderTitle>Publicações</S.HeaderTitle>
          <S.NumberPublications>6 publicações</S.NumberPublications>
        </S.Header>
        <form action="">
          <S.InputSearch type="search" placeholder="Buscar conteúdo" />
        </form>
        <S.Content>
          <Card />
          <Card />
        </S.Content>
      </S.Wrapper>
    </>
  )
}
