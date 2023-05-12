import styled, { DefaultTheme, css } from 'styled-components'
import { WrapperStyles } from './types'
import { Link as RouterLink } from 'react-router-dom'

const helperLink = (theme: DefaultTheme) => css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${theme.fontSize[12]};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.palette.blue};
  text-decoration: none;
`

export const Wrapper = styled.header<WrapperStyles>`
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
  ${({ theme, headerPost }) =>
    headerPost &&
    css`
      flex-direction: column;
      align-items: normal;
      gap: ${theme.spacing[5]};
    `}
`
export const ImgProfile = styled.img`
  ${({ theme }) => css`
    width: 148px;
    height: 148px;
    border-radius: ${theme.borderRadius[2]};
  `}
`

export const Content = styled.div`
  flex: 1;
`

export const Title = styled.h2`
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

export const Text = styled.p`
  ${({ theme }) => css`
    line-height: 1.5;
    margin-bottom: ${theme.spacing[5]};
  `}
`

export const Link = styled(RouterLink)`
  ${({ theme }) => helperLink(theme)}
`

export const Anchor = styled.a`
  ${({ theme }) => helperLink(theme)}
`

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    gap: ${theme.spacing[6]};
  `}
`

export const ListItem = styled.li`
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

// Post

export const WrapperPost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
