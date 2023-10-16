import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    max-width: 1100px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin : 0 auto;
    

.content h1 {
    font-size: 80px;
    text-transform: uppercase;
}    
`

const Button = styled.button `
    padding: 15px 18px;
    color: white;
    min-width: 220px;
    width: 100%;
    border: none;
    border-radius: 4px;
    background: #000;
    font-size: 20px;
    cursor: pointer;
    background-color: black;
    transition: 0.5s background ease-in;
    border: 1px solid #000;

    &:hover{
        background-color: white;
        color: black;
        transition: 0.3s background ease-in;
    }
`


const StartGame = ({toggle}) => {
    return(
    <Container>
        <div>
       <img src="images/dice.png" alt="Start Game Dice Image" />
       </div>
        <div className='content'>   
         <h1>Dice Game</h1>
         <Button onClick={toggle} >Play Now</Button>
         </div>
    </Container>
    )
}

export default StartGame