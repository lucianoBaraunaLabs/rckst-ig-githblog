import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    padding: ${theme.spacing[8]};
    background-color: ${theme.palette['base-post']};
    border-radius: 10px;
  `}
`
export const Header = styled.header`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing[5]};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${theme.spacing[4]};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    max-width: 40ch;
    color: ${theme.palette['base-title']};
    font-size: ${theme.fontSize[20]};
  `}
`

export const Time = styled.time`
  ${({ theme }) => css`
    font-size: ${theme.fontSize[14]};
    color: ${theme.palette['base-span']};
    font-weight: 400;
    flex-shrink: 0;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.palette['base-title']};
    line-height: 1.5;
  `}
`

export const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
