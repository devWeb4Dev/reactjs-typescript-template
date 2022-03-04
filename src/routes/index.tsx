import {
  BrowserRouter,
  Routes as ReactRoutes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'
import { Home } from '@pages/Home'

import { LoginTemplate } from './LoginTemplate'
import { IRoute } from '../types/Navigation'

const Product = () => <div>Product private</div>

export const PrivateTemplate: React.FC<IRoute> = ({ children }: IRoute) => {
  return (
    <>
      <div>xxxxx</div>
      <div>aaaa</div>
      <div>{children}</div>
    </>
  )
}

const PrivateRoute: React.FC<IRoute> = ({ children }: IRoute) => {
  const location = useLocation()
  console.log(location)
  const auth = true
  return auth ? (
    <PrivateTemplate>{children}</PrivateTemplate>
  ) : (
    <Navigate to="/" />
  )
}

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route
          path="/"
          element={
            <LoginTemplate>
              <div>Login</div>
            </LoginTemplate>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
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
