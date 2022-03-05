type DefaultProps = {
  children: React.ReactNode
}

export const Login: React.FC<DefaultProps> = ({ children }: DefaultProps) => {
  return (
    <div>
      {children}
      <img src="/assets/Humans.png" alt="" className="right-image" />
    </div>
  )
}
