import React from 'react'
import styled from 'styled-components'


const Container = styled.div `

padding-top: 10px;
 display: flex;
 flex-direction: column;
gap: 30px;

 h1{

    line-height: 40px;
    font-size: 60px;
    font-weight: bolder;
    margin: 0 auto;

}

 p{
    font-size: 22px;
    font-weight: bold;
    margin: 0 auto;
    
}
`


const TotalScore = ({color,score}) => {
  return (
    <Container>
    <h1 style= {{color: color}}>{score}</h1>
    <p>Total Score</p>  
    </Container>
  )
}

export default TotalScore