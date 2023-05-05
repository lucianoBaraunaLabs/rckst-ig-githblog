import styled, { css } from 'styled-components'

export const Content = styled.main`
  ${({ theme }) => css`
    max-width: 832px;
    padding: 0 ${theme.spacing[4]} ${theme.spacing[4]};
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
export const Header = styled.header`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.palette['base-profile']};
    box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    display: flex;
    gap: ${theme.spacing[8]};
    position: relative;
    padding: ${theme.spacing[8]} ${theme.spacing[10]};
    top: -90px;
    z-index: 3;

    @media (max-width: 992px) {
      flex-direction: column;
    }
  `}
`
export const HeaderImg = styled.img`
  ${({ theme }) => css`
    width: 148px;
    height: 148px;
    border-radius: ${theme.borderRadius[2]};
  `}
`

export const HeaderContent = styled.div`
  flex: 1;
`

export const HeaderTitle = styled.h2`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: ${theme.palette['base-title']};
    font-size: ${theme.fontSize[24]};
    font-weight: ${theme.fontWeight.bold};
    margin-bottom: ${theme.spacing[2]};
  `}
`

export const GithubLink = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: ${theme.fontSize[12]};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.palette.blue};
    text-decoration: none;
  `}
`

export const HeaderTxt = styled.p`
  ${({ theme }) => css`
    line-height: 1.5;
    margin-bottom: ${theme.spacing[5]};
  `}
`

export const HeaderList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    gap: ${theme.spacing[6]};
  `}
`

export const HeaderListItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing[1]};
    flex-wrap: wrap;
    svg {
      color: ${theme.palette['base-label']};
      font-size: ${theme.fontSize[24]};
    }
  `}
`

export const WrapperOutlet = styled.div`
  margin-top: -90px;
`
