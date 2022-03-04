import { Container } from './styles'
type DefaultProps = {
  children: React.ReactNode
}

export const LoginTemplate: React.FC<DefaultProps> = ({
  children,
}: DefaultProps) => {
  return (
    <Container>
      {children}
      <img src="/assets/Humans.png" alt="" className="right-image" />
    </Container>
  )
}
