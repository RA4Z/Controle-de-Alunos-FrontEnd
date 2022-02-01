import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: grey;
`

export const Content = styled.div`
  background-color: #d9d9d9;

  #botao {
    width: auto;
    height: 35px;
    margin-top: 15px;
    background: #00579d;
    float: right;
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: #007ddb;
    }
  }

  border: 0.719625px solid rgba(0, 0, 0, 0.25);
  box-shadow: 2.8785px 2.8785px 2.8785px rgba(0, 0, 0, 0.25);
  border-radius: 3.59812px;

  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  height: 400px;
  width: 500px;
  margin-top: 80px;
  margin-bottom: 50px;

  form {
    margin-top: 10px;
    width: 505px;
    height: auto;
    text-align: center;
    align-items: center;

  }

`
