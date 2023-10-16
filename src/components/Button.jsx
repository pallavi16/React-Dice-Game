import React from 'react'
import {styled} from 'styled-components'


export const Button = styled.button `
    padding: 15px 18px;
    color: white;
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
`;


 export const OutlineButton = styled(Button) `
    padding: 15px 18px;
    color: black;
    min-width: 100px;
    margin-bottom: 20px;
    border-radius: 4px;
    background: #000;
    font-size: 20px;
    cursor: pointer;
    background-color: white;
    transition: 0.5s background ease-in;
    border: 1px solid #000;

    &:hover{
        background-color: black;
        color: white;
        transition: 0.3s background ease-in;
    }
`;



