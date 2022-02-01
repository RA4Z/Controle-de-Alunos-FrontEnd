import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router'
import api from '../../service/api'

import { Cards, Message, Editado } from './style'

import { Tooltip } from '@mui/material'
import { Button, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { FormHandles } from '@unform/core'
import { useToast } from '../../hooks/toast'
import moment from 'moment'
import { Form } from '@unform/web'

interface FrequenciaDTO {
  id: number
  data: string
  presenca: number
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const CardF: React.FC = () => {
  const [cards, setCard] = useState<FrequenciaDTO[]>([])
  const history = useHistory()
  const [newData, setNewData] = useState(null)
  const { addToast } = useToast()
  const formRef = useRef<FormHandles>(null)
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    const alunoId = localStorage.getItem("alunoId")
    api.get(`frequencia/${alunoId}`).then(response => {
      setCard(response.data)
    })
  }, [])

  function telaAluno() {
    history.push("/aluno")
  }

  function traduzir(valor: number) {
    if(valor === 1){
      return "Presente"
    }
    if(valor === 0){
      return "Ausente"
    }
  }
  function deletar(id: number) {
    const alunoId = localStorage.getItem("alunoId")
    const idAluno = id.toString();
    api.delete(`frequencia/${alunoId}/${idAluno}`)
    window.location.reload()
  }

  function abrirEditar(id:number) {
    const cardId = id.toString();
    localStorage.setItem("registroId", cardId);
    document.getElementById("edicao")!.style.display = "block";
  }
  function fechar(){
    document.getElementById("edicao")!.style.display = "none";
  }

  async function editar() {
    let valor = 0;
    console.log(valor)

    if(checked == true){
      valor = 1;
    }else{
      valor = 0;
    }

    const cadastro = {
      data: moment(newData).format('DD-MM-YYYY'),
      presenca: valor
    }

  try {
    const alunoId = localStorage.getItem("alunoId")
    const registroId = localStorage.getItem("registroId")
    formRef.current?.setErrors({})

    console.log(cadastro)
    await api.put(`/frequencia/${alunoId}/${registroId}`, cadastro)
      
    window.location.reload()

  } catch (err) {
    addToast({
      type: 'error',
      title: 'Erro de Cadastro',
      description: 'Ocorreu um erro ao realizar o cadastro, verifique as informações fornecidas.'
    })
  }
}
  return (
    <>
    <Editado id="edicao">
    <Form ref={formRef} onSubmit={editar} id="formEdit">
      <div id="fechar" onClick={fechar}/>
      <div id="texto">Editar informações do registro </div>

      <div id="movel">
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
            </div>

            <div>
            <input
            id="check"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
            <p id="presente">Aluno presente?</p>
            </div>

      <div id="submit" >
            <Button
              id="button"
              color="success"
              type="submit"
            >
            <p>CADASTRO</p>
            </Button>
            </div>
            </Form>
      </Editado>
      {[0].map(App => (
        <motion.div variants={item} key={null}>
          {cards.length > 0 ? (
            cards.map(card => (
              <Cards key={card.id} id="card" onClick={telaAluno}>

                <div id="Nome">{card.data}</div>

                <Tooltip title="Deletar">
                <div id="deletar" onClick={() => deletar(card.id)}/>
                </Tooltip>

                <Tooltip title="Editar">
                <div id="editar" onClick={() => abrirEditar(card.id)} />
                </Tooltip>

                <div id="presenca"></div>{traduzir(card.presenca)}

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

export default CardF
