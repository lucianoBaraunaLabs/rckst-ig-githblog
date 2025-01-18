import { HeaderContainer } from './styles'
import logoSrc from '@/assets/images/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSrc} alt="" />
    </HeaderContainer>
  )
}
