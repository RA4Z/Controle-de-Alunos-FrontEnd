import React, { useState, useRef } from 'react'
import { useToast } from '../../hooks/toast'
import { useHistory } from 'react-router'
import { Form } from '@unform/web'
import NavBar from '../../components/Nav'
import Card from '../../components/Card'
import { FormHandles } from '@unform/core'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { Caixa, Back, Cadastro } from './style'

import { Tooltip } from '@material-ui/core'
import { Button } from '@mui/material'
import api from '../../service/api'

const Home: React.FC = () => {

  const history = useHistory()
  const { addToast } = useToast()
  const formRef = useRef<FormHandles>(null)
  const [newNome, setNewNome] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newFone, setNewFone] = useState('')
  const [newTurma, setNewTurma] = useState('')
  const [newSituacao, setNewSituacao] = useState('')
  
  async function cadastrar() {

    const cadastro = {
    nome: newNome,
    email: newEmail,
    telefone: newFone,
    turma: newTurma,
    situacao: newSituacao
    }

  try {
      
    formRef.current?.setErrors({})
    console.log(cadastro)
    await api.post(`/alunos`, cadastro)
      
    setNewNome('')
    setNewEmail('')
    setNewFone('')
    setNewTurma('')
    setNewSituacao('')
    window.location.reload()

  } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro de Cadastro',
        description: 'Ocorreu um erro ao realizar o cadastro, verifique as informações fornecidas.'
      })
  }
}
  function voltar() {
      history.push("/");
  }

  return (
      <>
          <NavBar label={"Cadastro de Alunos"} />
          <div id="tudo" style={{ transition: "0.5s" }}>
             
                  <Tooltip title="Voltar">
                      <Back id="voltar" onClick={voltar}>
                          <ArrowBackIcon />
                      </Back>
                  </Tooltip>
                  
                  <Caixa id="caixa">
                  <Cadastro id="cadastro" >
                  <Form ref={formRef} onSubmit={cadastrar} id="formCadastro">

                  <input type="text" id="input" placeholder='Nome' 
                    onChange={e => setNewNome(e.target.value)}
                    value={newNome}/>

                  <input type="text" id="input" placeholder='Email' 
                    onChange={e => setNewEmail(e.target.value)}
                    value={newEmail}/>

                  
                  <input type="text" id="input" placeholder='Fone' 
                    onChange={e => setNewFone(e.target.value)}
                    value={newFone}/>

                  <input type="text" id="input" placeholder='Turma' 
                    onChange={e => setNewTurma(e.target.value)}
                    value={newTurma}/>

                  <input type="text" id="input" placeholder='Situação' 
                    onChange={e => setNewSituacao(e.target.value)}
                    value={newSituacao}/>

                  <div id="submit" >
            <Button
              id="button"
              color="success"
              type="submit"
            >
            </Button>
            <p>CADASTRO</p>
            </div>
            </Form>
                  </Cadastro>
                  <Card />                
                  </Caixa>
          </div>
      </>

  );

}
export default Home;