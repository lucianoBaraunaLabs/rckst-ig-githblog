import * as S from './styles'

export function Card() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>
          <S.Link to="/post/1">
            Título aqui Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.
          </S.Link>
        </S.Title>
        <S.Time>Há 1 dia</S.Time>
      </S.Header>
      <S.Text>
        <S.Link to="/post/1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente
          ullam cum accusamus quisquam, nobis beatae praesentium. Consequuntur
          accusamus maxime voluptatibus tempora amet, voluptatem, distinctio
          itaque quia dolorum dicta ipsum.
        </S.Link>
      </S.Text>
    </S.Wrapper>
  )
}
