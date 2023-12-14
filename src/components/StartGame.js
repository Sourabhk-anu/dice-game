import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
      <img src='./images/dices.jpg' alt='dice'/>
        </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .content {
    h1 {
      font-size: 96px;
    }
  }
`
const Button = styled.button`
  background-color: red;
  color: white;
  padding: 18px 18px;
  width: 220px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s background ease-in;

  &:hover {
    background-color: green;
    color: white;
    transition: 0.2s background ease-in;
  }
`