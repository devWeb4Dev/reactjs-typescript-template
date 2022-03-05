// import api from '@services/api'
import api from '@services/api'
import {
  createContext,
  useCallback,
  useContext,
  useState,
  // useEffect,
  // useState,
} from 'react'

interface IUser {
  id: number
  name: string
  email: string
  picture: string
  profile: {
    name: string
  }
  userName: string
  license: string
}

interface ICredential {
  email: string
  password: string
}

interface IAuthContextData {
  user: IUser
  tokenExists: boolean
  signIn(credential: ICredential): Promise<void>
  // deleteAccount(): void
  // resendCode(userDocument: string, type: string): void
  // // recoverPassword(email: string): Promise<IResponseRecoverPassword>
  // resetPassword(email: string, password: string): Promise<void>
  // // signUp(data: SignUpData): Promise<void>
  // // signIn(credential: SignInData): Promise<User>
  // signOut(): Promise<void>
  // tourFinished(): void
  // // updateUser(updateUserData: IUpdateUserData): Promise<void>
  // validationCode(
  //   userDocument: string,
  //   code: string,
  //   type: string
  // ): Promise<boolean>
  // loadingApi: boolean
  // exitingApp: boolean
  // loading: boolean
  // tourVisitedUser: boolean
  // verifiedAccount: boolean
}

// interface IAuthState {
//   token: string | null
//   user: IUser
// }

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>(
    JSON.parse(localStorage.getItem('@SamiSaude:user') || '{}')
  )

  const [token, setToken] = useState(localStorage.getItem('@SamiSaude:token'))

  const signIn = useCallback(
    async ({ email, password }: ICredential): Promise<void> => {
      try {
        console.log(email, password)
        const response = await api.post('/careteam/login', {
          username: email,
          password: password,
        })

        console.log(response.data)

        const { user: dataUser, token: dataToken } = response.data.data

        localStorage.setItem('@SamiSaude:user', JSON.stringify(dataUser))
        localStorage.setItem('@SamiSaude:token', JSON.stringify(dataToken))
        setUser(dataUser)
        setToken(dataToken)
      } catch (error) {
        console.log(error)
      }
    },
    []
  )

  return (
    <AuthContext.Provider
      value={{
        user: user,
        tokenExists: !!token,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
