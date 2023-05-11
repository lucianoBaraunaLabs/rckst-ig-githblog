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
          <article>
            <header>
              <h3>
                Título aqui <time>Há 1 dia</time>
              </h3>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              sapiente ullam cum accusamus quisquam, nobis beatae praesentium.
              Consequuntur accusamus maxime voluptatibus tempora amet,
              voluptatem, distinctio itaque quia dolorum dicta ipsum.
            </p>
          </article>
          <article>
            <header>
              <h3>
                Título aqui <time>Há 1 dia</time>
              </h3>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              sapiente ullam cum accusamus quisquam, nobis beatae praesentium.
              Consequuntur accusamus maxime voluptatibus tempora amet,
              voluptatem, distinctio itaque quia dolorum dicta ipsum.
            </p>
          </article>
        </S.Content>
      </S.Wrapper>
    </>
  )
}
