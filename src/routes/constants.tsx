import { Home } from '../pages/Home'

type TRoutes = {
  [key: string]: {
    path: string
    private: boolean
    element: React.ReactNode
    title: string
    pageTitle?: string
  }
}

export const Routes: TRoutes = {
  login: {
    path: '/',
    private: false,
    element: <div>x</div>,
    title: '',
    pageTitle: 'Entrar',
  },
  home: {
    path: '/home',
    private: true,
    element: <Home />,
    title: '',
  },
  patient: {
    path: '/patient/:id',
    private: true,
    element: <Home />,
    title: '',
  },
}
