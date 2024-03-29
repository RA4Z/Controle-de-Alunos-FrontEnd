import React, { useState, createContext, useContext, useCallback } from 'react'

import { uuid } from 'uuidv4'
import ToastContainer from '../components/Toast'

interface ToastContextData {
  addToast(message: Omit<messageContent, 'id'>): void
  removeToast(id: string): void
}

export interface messageContent {
  id: string
  type?: 'success' | 'error' | 'info'
  title: string
  description?: string
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

const ToastProvider: React.FC = ({ children }) => {
  const [message, setMessage] = useState<messageContent[]>([])

  const addToast = useCallback(
    ({ type, title, description }: Omit<messageContent, 'id'>) => {
      const id = uuid()

      const toast = {
        id,
        type,
        title,
        description
      }

      setMessage(state => [...state, toast])
    },
    []
  )

  const removeToast = useCallback((id: string) => {
    setMessage(state => state.filter(message => message.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer message={message} />
    </ToastContext.Provider>
  )
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used withing ToastProvider')
  }

  return context
}

export { useToast, ToastProvider }
