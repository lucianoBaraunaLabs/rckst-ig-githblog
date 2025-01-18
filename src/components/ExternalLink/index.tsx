import { ComponentProps, ReactNode } from 'react'
import { ExternalLinkContainer } from './styles'
import { ArrowUpRight } from '@phosphor-icons/react'

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string
  icon?: ReactNode
  variant?: 'iconLeft'
}

export function ExternalLink({ text, icon, ...props }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...props}>
      {text}
      {icon ?? <ArrowUpRight size={32} />}
    </ExternalLinkContainer>
  )
}
