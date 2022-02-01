import React, { createContext, useCallback, useState, useContext } from 'react'

import api from '../service/api'

interface Credentials {
  id: number
  nome: string
  email: string
  senha: string
}

interface AuthState {
  jwt: string
  usuario: object
}

interface ContextData {
  signIn(credentials: Credentials): Promise<void>
  signOut(): void
  usuario: object
}

const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const jwt = localStorage.getItem('@CDT:token')
    const usuario = localStorage.getItem('@CDT:usuario')

    if (jwt && usuario) {
      return { jwt, usuario: JSON.parse(usuario) }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async ({ id, email, senha, nome }) => {
    const response = await api.post('authenticate', {
      id,
      nome,
      email,
      senha
    })
    const { jwt, usuario } = response.data
    delete usuario.password
    delete usuario.senha
    localStorage.setItem('@CDT:token', jwt)
    localStorage.setItem('@CDT:usuario', JSON.stringify(usuario))
    setData({ jwt, usuario })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@CDT:token')

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ usuario: data.usuario, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): ContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used withing an AuthProvider')
  }

  return context
}
