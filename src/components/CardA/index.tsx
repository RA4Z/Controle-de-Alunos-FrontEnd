import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import api from '../../service/api'

import { Cards, Message } from './style'

import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { TextField } from '@mui/material'
import moment from 'moment'

interface AlunoDTO {
  id: number
  nome: string
}
interface PresencaDTO {
  id: number
  data: string
  presenca: boolean
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const CardA: React.FC = () => {
  const [cards, setCard] = useState<AlunoDTO[]>([])
  const [newData, setNewData] = useState(null)



  async function confirmarPresenca (alunoId: number){

    let presenca = 1;

    const frequencia ={
        id: alunoId,
        data: moment(newData).format('DD-MM-YYYY'),
        presenca: presenca
    }

    try {
      const id = alunoId.toString();
      console.log(frequencia)
        await api.post(`/frequencia/${id}`, frequencia)
    } catch (err) {
    }
    
}

async function confirmarAusencia (alunoId: number){

  let presenca = 0;

  const frequencia ={
      id: alunoId,
      data: moment(newData).format('DD-MM-YYYY'),
      presenca: presenca
  }

  try {
    const id = alunoId.toString();
    console.log(frequencia)
      await api.post(`/frequencia/${id}`, frequencia)
  } catch (err) {
  }
}

  useEffect(() => {
    api.get(`alunos`).then(response => {
      setCard(response.data)
    })
  }, [])

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Selecionar Data"
                value={newData}
                onChange={newValue => {
                  setNewData(newValue)
                }}
                renderInput={params => <TextField {...params} />}
              />
            </LocalizationProvider>
            
      {[0].map(App => (
        <motion.div variants={item} key={null}>
          {cards.length > 0 ? (
            cards.map(card => (
              <Cards key={card.id} id="card" >
                <div id="Nome">{card.nome}</div>
                <div>
                <input id="check" type="radio" name={card.nome} onClick={() => confirmarPresenca(card.id)}/>
            <p id="presente">Presente</p>
            </div>
            <div>
                <input id="checkA" type="radio" name={card.nome} onClick={() => confirmarAusencia(card.id)}/>
            <p id="presente">Ausente</p>
            </div>
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

export default CardA
