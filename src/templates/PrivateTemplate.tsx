import { IRoute } from '@ITypes/navigate'

export const PrivateTemplate: React.FC<IRoute> = ({ children }: IRoute) => {
  return (
    <>
      <div>xxxxx</div>
      <div>aaaa</div>
      <div>{children}</div>
    </>
  )
}
