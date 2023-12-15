import styled from "styled-components"

const arrNumber = [1, 2, 3, 4, 5, 6]

const NumberSelector = ({selectedNumber, setSelectedNumber}) => {
    

    console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
        <div className='flex'>
          {arrNumber.map((value, i) => (<Box 
          isSelected={value===selectedNumber} key={i} 
          onClick = {() => setSelectedNumber(value)}>{value}
          </Box>))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700px;
  }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    display: grid;
    place-items: center;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 24px;
    font-weight: 700px;
    background-color: ${(props) => (props.isSelected? 'black' : 'white')};
    color: ${(props) => (props.isSelected? 'white' : 'black')};

    &:hover{
        background-color: black;
        color: white;
        cursor: pointer;
    }
`;