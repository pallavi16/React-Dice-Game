import React from 'react'
import styled from 'styled-components'



const RollDiceContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;

.dice_images{
    cursor: pointer;
}

p {
    font-size: 24px;
    font-weight: bold;
}

`

const RollDice = ({currentDiceImage, setGenerateDice}) => {


  return (
    <RollDiceContainer>
    <div className='dice_images' onClick={setGenerateDice}>
         <img 
         alt="Roll Dice"
         src= {`/images/dice/dice_${currentDiceImage}.png`} />
    </div>
    <p>Click On Dice to roll</p>
 
 </RollDiceContainer>
  )
}

export default RollDice