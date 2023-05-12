import * as S from './styles'

export function Card() {
  return (
    <S.CardWrapper>
      <S.CardHeader>
        <S.CardTitle>
          Título aqui Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </S.CardTitle>
        <S.CardTime>Há 1 dia</S.CardTime>
      </S.CardHeader>
      <S.CardText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente
        ullam cum accusamus quisquam, nobis beatae praesentium. Consequuntur
        accusamus maxime voluptatibus tempora amet, voluptatem, distinctio
        itaque quia dolorum dicta ipsum.
      </S.CardText>
    </S.CardWrapper>
  )
}
