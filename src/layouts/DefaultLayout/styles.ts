import styled, { css } from 'styled-components'

export const Content = styled.main`
  ${({ theme }) => css`
    max-width: 832px;
    padding: 0 ${theme.spacing[4]} ${theme.spacing[14]};
    margin: 0 auto;
  `}
`
export const WrapperBackground = styled.figure`
  position: relative;
  height: 280px;
`
export const ImgGithubBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`
export const ImgGithubLogo = styled.img`
  ${({ theme }) => css`
    position: relative;
    z-index: 2;
    top: ${theme.spacing[14]};
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const WrapperOutlet = styled.div`
  margin-top: -90px;
`
