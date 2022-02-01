import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router'
import api from '../../service/api'

import { Cards, Message, Editar, Deletar, View } from './style'
import { Tooltip } from '@mui/material'


interface AlunoDTO {
  id: number
  nome: string
  email: string
  telefone: string
  turma: string
  situacao: string
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Card: React.FC = () => {
  const [cards, setCard] = useState<AlunoDTO[]>([])
  const history = useHistory()

  useEffect(() => {
    api.get(`alunos`).then(response => {
      setCard(response.data)
    })
  }, [])

  function telaAluno(id: number) {
    const alunoId = id.toString()
    localStorage.setItem("alunoId",alunoId)
    history.push("/aluno")
  }

  function cadastro() {
    document.getElementById("cadastro")!.style.display = 'block';
  
  }
  function deletar(id: number) {
    const idAluno = id.toString()
    api.delete(`alunos/${idAluno}`)
    window.location.reload()
  }
  function editar(id:number){
    const idAluno = id.toString()
    localStorage.setItem("idEditar", idAluno)
    history.push("/editar")
  }
  return (
    <>
      {[0].map(App => (
        <motion.div variants={item} key={null}>
          {cards.length > 0 ? (
            cards.map(card => (
              <Cards key={card.id} id="card" >

                <div id="Secao">{card.email}</div>
                <div id="Nome">{card.nome}</div>
                <div id="cadastrar" onClick={cadastro} />

                <div id="Status" >
                  <span>Fone: {card.telefone} </span>
                </div>
                <div id="Status">Turma: {card.turma}</div>
                <div id="Status">Situação: {card.situacao}</div>
                
                <Tooltip title="Registro">
                <View onClick={() => telaAluno(card.id)}/>
                </Tooltip>

                <Tooltip title="Deletar">
                <Deletar onClick={() => deletar(card.id)}/>
                </Tooltip>

                <Tooltip title="Editar">
              <Editar onClick={() => editar(card.id)}/>
              </Tooltip>

              </Cards>
            ))
          ) : (
            <Message>Não há nada registrado aqui</Message>
          )}
        </motion.div>
      ))}
    </>
  )
}

export default Card
