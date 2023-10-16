import React from 'react'
import styled from 'styled-components'


const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: end;

.select_number {
display: flex;
 gap: 10px;
}

.error{
    color: red;
}

p{
   font-size: 23px;
   font-weight: bold;
   align-items: end; 
        }


`


const Button = styled.button `
background-color: white;
gap: 20px;
margin: 5px;
font-size: 30px;
padding: 10px 20px;
background-color: ${(props) => props.selectedNumber ? 'black': 'white'}; 
color: ${(props) => props.selectedNumber ? 'white' : 'black'};

&:hover {
    background-color: black;
    transition: 0.3s background ease-in;
    color: white;
    cursor: pointer;
}
`


const NumberSelector = ({error, setError, isSelected, setSelected}) => {
  
    const boxNumber = [1,2,3,4,5,6];
    console.log(isSelected);   

    const ErrorHandler = (value) => {

       setSelected(value);
       setError(" ");
    }


    return (
        
    <Container>
        <p className='error'>{error}</p>
    <div className='select_number'>
    { boxNumber.map((value, i) => (<Button onClick= { () => ErrorHandler(value)} 
                                    selectedNumber = {value === isSelected}
                                    key = {i}>
                                    {value}</Button> ))}
           
    
     </div>  
     <p> Select Number </p>    
     </Container>

  )
}

export default NumberSelector