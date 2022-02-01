import styled from 'styled-components'

export const Cards = styled.div`
  width: 25vw;
  height: auto;
  float: left;
  margin-top: 6.08vh;
  margin-right: 4.1vw;
  background-color: white;
  box-shadow: 0.45vh 0.45vh 0.45vh 0.45vh rgba(0.25, 0.25, 0.25, 0.25);
  border-radius: 1.2vh;
  padding-bottom: 5px;
  color: black;

  #Nome {
    width: 17vw;
    height: auto;
    float: left;
    margin-top: 1.28vh;
    margin-left: 1.09vw;
    color: black;
    font-weight: bold;
    font-size: 2.28vh;
  }
  #presenca{
    color: black;
    font-weight: bold;
    font-size: 2vh;
    margin-top:5px;
  }

  #deletar{
    cursor: pointer;
    background-color: red;
    width:20px;
    height:20px;
    transform: translate(110px,5px); 
    transition: 0.5s;

    &:hover {
      background-color: darkred;
    }
  }

  #editar{
    cursor: pointer;
    background-color: orange;
    width:20px;
    height:20px;
    transform: translate(175px,5px); 
    transition: 0.5s;

    &:hover {
      background-color: darkorange;
    }
  }
`

export const Message = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 38px;
  color: black;
`

export const Editado = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  z-index: 12;
  box-shadow: 0.45vh 0.45vh 0.45vh 0.45vh rgba(0.25, 0.25, 0.25, 0.25);
  width: 700px;
  height: 500px;
  transform: translate(40px,-80px);

  #fechar{
    background-color: darkblue;
    width: 20px;
    height: 20px;
    transform: translate(670px,10px);
    cursor: pointer;
  }
  #texto{
    width: 215px;
    height: 20px;
    background-color: white;
    transform: translate(10px,-10px);
  }
  
  #submit{
    background-color: #07ab33;
    width: 100px;
    height: 30px;
    transform: translate(300px,350px);
    cursor: pointer;
    transition: 0.5s;
    z-index: 15;
    position: absolute;

    &:hover {
      background-color: #095e20;
    }
    p{
      color: white;
      transform: translate(2px, -3px);
    }
  }
  #movel{
    transform: translate(200px, 50px);
    position: absolute;
  }
  #check{
    transform: translate(250px, 164px);
    position: absolute;
  }
  #presente{
    transform: translate(280px, 164px);
    position: absolute;
  }
`