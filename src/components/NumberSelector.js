import styled from "styled-components"
import { useState } from "react"

const arrNumber = [1, 2, 3, 4, 5, 6]

const NumberSelector = () => {
    const[selectedNumber, setSelectedNumber] = useState();

    console.log(selectedNumber);

  return (
    <div>
        
        {arrNumber.map((value, i) => (<Box isSelected={value===selectedNumber} key={i} onClick = {() => setSelectedNumber(value)}>{value}</Box>))}
    </div>
  )
}

export default NumberSelector

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