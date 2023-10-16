import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState } from 'react'
import styled from 'styled-components'
import { Button }  from './Button'
import { OutlineButton } from './Button'

const MainContainer = styled.main `
padding-top: 10px;


.top_section {
    display: flex;
    justify-content: space-between;
    margin-left: 30px;

}

.button_score{
display: flex;
flex-direction: column;
margin: 0 auto;
gap: 20px;
max-width: 18%;
}


.game_rules{
    background-color: #FBF1F1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 30%;
    margin: 0 auto;
}

.game_rules h3{
    font-size: 24px;
}


.game_rules_desc{
    margin-top: 20px;
    list-style: none;
    font-size: 18px;
}

`

const GamePlay = ({toggle}) => {

    const [score, setScore] = useState(0);
    const [isSelected, setSelected] = useState(); //Number Selector
    const [currentDiceImage, setDiceImage] = useState(1); //Roll Dice
    const [error, setError] = useState("");
    const [gameRulesVisible, setGameRulesVisible] = useState(false);
    const [color, setColor] = useState();

    const resetscore = () => {
        console.log(score);
        setScore(0);
    }

    const showGameRules = () => {
        setGameRulesVisible(prev => !prev);
    }


    const generateDice = (min, max) => {
        console.log(Math.floor(Math.random()  
        * (max - min + 1)) + min);
       return Math.floor(Math.random()  
        * (max - min + 1)) + min;
    
    }

    const setGenerateDice = () => {
        if(!isSelected) {
            setError("You haven't selected any number");
            return;}

         
        const randomNumber = generateDice(1,6);
        console.log(randomNumber);
        setDiceImage((prev) => randomNumber);

        if(isSelected === randomNumber) {
            setScore(prev => prev + randomNumber);
            setColor((prev) => {color: "green"})
        }
        else {
            setScore (prev => prev - 2);
            setColor((prev) =>{color: "red"})
        }

        setSelected(undefined);                                     

    }
    

  return (
        <>
        <MainContainer>
        <div className='top_section'>
        <TotalScore color= {color} score= {score}/>
        <NumberSelector error = {error}  setError={setError} isSelected={isSelected} setSelected={setSelected} />
        </div>
        <RollDice currentDiceImage={currentDiceImage} setGenerateDice={setGenerateDice} />
        <div className='button_score'>
        <Button onClick ={resetscore} >Reset Score</Button>
        <OutlineButton onClick= {showGameRules}>Show Rules</OutlineButton>
        </div>

        {
            gameRulesVisible &&
        <div className='game_rules' >
            <h3>How to play dice game</h3>
            <ul className='game_rules_desc'>
            <li>Select any number</li>
            <li>Click on dice image
            after click on  dice </li> 
            <li> If selected number is equal to dice number 
            you will get same point as dice </li>
           <li> If you get wrong guess then  2 points will be deducted </li>
            </ul>
        </div>
        }

        </MainContainer>

        </>
  )
}

export default GamePlay