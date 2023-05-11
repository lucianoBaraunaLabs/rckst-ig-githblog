import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding-top: ${theme.spacing[20]};
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.spacing[3]};
  `}
`
export const HeaderTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.palette['base-subtitle']};
    font-size: ${theme.fontSize[18]};
    font-weight: ${theme.fontWeight.bold};
  `}
`
export const NumberPublications = styled.p`
  ${({ theme }) => css`
    color: ${theme.palette['base-span']};
    font-size: ${theme.fontSize[14]};
  `}
`
export const InputSearch = styled.input`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    border: solid 1px ${theme.palette['base-border']};
    border-radius: ${theme.borderRadius['1.5']};
    background-color: ${theme.palette['base-input']};
    padding: ${theme.spacing[3]} ${theme.spacing[4]};
    color: ${theme.palette['base-label']};

    &:focus {
      color: ${theme.palette['base-text']};
      outline: solid 1px ${theme.palette.blue};
    }
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacing[11]};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[8]};

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`
