import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  children: React.ReactNode
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        variant={variant}
      >
        {children}
      </ButtonContainer>
    )
  } else {
    return (
      <ButtonLink
        to={to as string}
        title={title}
        onClick={onClick}
        variant={variant}
      >
        {children}
      </ButtonLink>
    )
  }
}

export default Button
