import styled from 'styled-components'

const RoleDice = ({currentDice, roleDice}) => {

  return (
    <DiceContainer>
        <div className='dice'>
        <img onClick={roleDice} src={`/images/dice/dice_${currentDice}.png`} alt='dice'/>
        </div>
        <p>CLICK ON DICE TO ROLL</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

    P {
        font-size: 24px;
    }

    .dice {
        cursor: pointer;
    }
`;