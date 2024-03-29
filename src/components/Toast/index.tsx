import React from 'react'
import { useTransition } from 'react-spring'
import { messageContent } from '../../hooks/toast'
import Toast from './Toast'

import { Container } from './style'

interface ContainerProps {
  message: messageContent[]
}

const ToastContainer: React.FC<ContainerProps> = ({ message }) => {
  const messagesWithTransitions = useTransition(
    message,
    message => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' }
    }
  )
  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  )
}

export default ToastContainer
