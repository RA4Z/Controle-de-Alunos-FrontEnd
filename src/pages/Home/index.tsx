import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'

import { Container, Content } from './style'



const Login: React.FC = () => {
  const history = useHistory()

  function telaCadastro(){
    history.push("/cadastro")
  }
  function telaFrequencia(){
    history.push("/frequencia")
  }

  return (
    <>
      <Container>
        <Content>

            <Button id="botao" type="submit" variant="contained" onClick={telaCadastro}>
              Cadastro
            </Button>
            <Button id="botao" type="submit" variant="contained" onClick={telaFrequencia}>
              Frequência
            </Button>

        </Content>
      </Container>
    </>
  )
}
export default Login
