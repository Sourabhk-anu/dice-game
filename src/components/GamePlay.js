import styled from 'styled-components'
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from './RoleDice'
import { useState } from 'react'

const GamePlay = () => {

  const[score, setScore] = useState(0);
  const[selectedNumber, setSelectedNumber] = useState();
  const[currentDice, setCurrentDice] = useState(1);
  const[error, setError] = useState();

  const generateRandomNumber = (max, min) => {
    console.log(Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min)
  }

  const roleDice = () => {

      if(!selectedNumber) {
        setError('You have not selected any number');

        return;
      }

      const randomNumber = generateRandomNumber(7, 1);
      setCurrentDice((prev) => randomNumber);

      if(selectedNumber == randomNumber){
        setScore((prev) => prev + randomNumber);
      } else {
        setScore((prev) => prev - 2);
      }

      setSelectedNumber(undefined);
  }

  return (
    <MainContainer>
       <div className='top_section'>
       <TotalScore 
        score = {score}
       />
        <NumberSelector 
          error = {error}
          setError = {setError}
          selectedNumber = {selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
       </div>
       <RoleDice 
        currentDice = {currentDice}
        roleDice = {roleDice}
       />
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`

padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;