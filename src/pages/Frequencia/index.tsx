import React from 'react'
import { useHistory } from 'react-router'
import NavBar from '../../components/Nav'


import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { Caixa, Back } from './style'

import { Tooltip } from '@material-ui/core'
import CardA from '../../components/CardA'
import { Button } from '@mui/material'

const Frequencia: React.FC = () => {
    const history = useHistory()

  function voltar() {
      history.push("/");
  }
  function telaHome(){
    history.push("/")
  }

  return (
      <>
          <NavBar label={"Frequência de Alunos"} />
          <div id="tudo" style={{ transition: "0.5s" }}>
             
                  <Tooltip title="Voltar">
                      <Back id="voltar" onClick={voltar}>
                          <ArrowBackIcon />
                      </Back>
                  </Tooltip>
                  <Caixa id="caixa">
                  <div id="inputData">
          </div>
            <Button id="botao" type="submit" variant="contained" onClick={telaHome}>
              Enviar
            </Button>
                    <CardA />         
                  </Caixa>
          </div>
      </>

  );

}
export default Frequencia;