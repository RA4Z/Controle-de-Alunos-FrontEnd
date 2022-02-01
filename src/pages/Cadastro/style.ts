import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: #ffffff;
  height: 13.69vh;
  box-shadow: 0 0.15vh 0 rgba(0, 0, 0, 0.25);
`

export const Back = styled.div`
  cursor: pointer;
  opacity: 1;
  margin-left: 170px;
  margin-top: 130px;
  position: absolute;

  img {
    height: 5vh;
    transition: transform 0.4s ease-in-out;
  }

  @keyframe aparecer {
    to {
      opacity: 1;
    }
  }

  @keyframe desaparecer {
    to {
      opacity: 1;
    }
  }
`

export const Caixa = styled.div`
  width: 60vw;
  height: auto;
  padding-bottom: 6.08vh;
  float: right;
  margin-top: 30vh;
  margin-right: 37vh;
  background-color: transparent;
  border-radius: 1vh 1vh 1vh 1vh;
  transition: 0.5s;

  @keyframe aparecer {
    to {
      opacity: 1;
    }
  }

  #apontamento {
    margin-top: 20px;
  }

  span {
    font-weight: bold;
    margin-right: 10px;
  }

  .horaApontamento {
  }

  #horas {
    font-weight: 100;
  }

  #deletar {
    position: absolute;
    transition: 0.2s;
    margin-left: 33.4px;
  }

  #deletar:hover {
    color: red;
  }

  #editar {
    position: absolute;
    transition: 0.2s;
  }

  #editar:hover {
    color: blue;
  }

  #baka {
    float: right;
    width: auto;
    margin-left: 380px;
  }
`

export const EnvioDados = styled.div`
  position: absolute;
  cursor: pointer;
  opacity: 1;
  margin-top: 127px;
  margin-left: 1220px;
  float: right;

  img {
    height: 5vh;
    transition: transform 0.4s ease-in-out;
  }

  @keyframe aparecer {
    to {
      opacity: 1;
    }
  }

  @keyframe desaparecer {
    to {
      opacity: 1;
    }
  }
`
export const Cadastro = styled.div`
  background-color: white;
  width: 738px;
  height: 200px;
  z-index: 12;
  box-shadow: 0.45vh 0.45vh 0.45vh 0.45vh rgba(0.25, 0.25, 0.25, 0.25);

  #input{
    margin-left: 20px;
    margin-top: 20px;

  }

  #submit{
    background-color: #07ab33;
    width: 100px;
    height: 30px;
    transform: translate(620px,70px);
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: #095e20;
    }
    p{
      color: white;
      transform: translate(5px, -10px);
    }

  }
`
