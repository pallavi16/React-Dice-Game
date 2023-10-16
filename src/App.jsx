import styled from 'styled-components';
import StartGame from './components/StartGame';
import { useState } from "react";
import GamePlay from './components/GamePlay';

function App() {
  
  const [isGameStarted, setGameStarted] =  useState(false);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <>
    {isGameStarted ? <GamePlay toggle={toggleGamePlay} />:   <StartGame toggle={toggleGamePlay} />}
    </>
  )
}

export default App
