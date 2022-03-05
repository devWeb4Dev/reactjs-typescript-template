import { Box } from '@chakra-ui/react'
import { useAuth } from '@hooks/useAuth'
import { IRoute } from '@ITypes/navigate'
import { Login } from '@pages/Login'
import {
  BrowserRouter,
  Routes as ReactRoutes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'
import { PrivateTemplate } from 'src/templates/PrivateTemplate'

const Product = () => <div>Product private</div>

const PrivateRoute: React.FC<IRoute> = ({ children }: IRoute) => {
  const location = useLocation()
  const { user, tokenExists } = useAuth()

  console.log('[location]>>>>>>', location)
  console.log('[User]>>>>>>', user, tokenExists)

  // useEffect(() => {
  //   // signIn({ email: 'mock3@oisami.com', password: 'Mock123!!!' })
  //   console.log('<<<USER>>>>', tokenExists)
  // }, [tokenExists])

  return user && tokenExists ? (
    <PrivateTemplate>{children}</PrivateTemplate>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  )
}

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="*" element={<Navigate to="/login" />} />

        <Route
          path="/login"
          element={
            <Login>
              <Box bg="brand.100">login</Box>
            </Login>
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Box bg="brand.400">Welcome</Box>
            </PrivateRoute>
          }
        />

        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
      </ReactRoutes>
    </BrowserRouter>
  )
}
