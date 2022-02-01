import React from 'react'
import AuthProvider from './hooks'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

import Global from './style/global'

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes />
        </AuthProvider>

        <Global />
      </Router>
    </>
  )
}

export default App
