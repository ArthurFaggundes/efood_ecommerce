import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  children: React.ReactNode
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary',
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        variant={variant}
        disabled={disabled}
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
