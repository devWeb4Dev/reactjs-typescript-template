import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '@hooks/useAuth'

import { Routes } from './routes'
import { theme } from './styles/theme'

const App: React.FC = () => (
  <>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ChakraProvider>
  </>
)

export default App
