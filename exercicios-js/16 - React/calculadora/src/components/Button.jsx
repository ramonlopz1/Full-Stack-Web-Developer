import React from "react";
import './Button.css'


/*
    se a propriedade operation existir, na instância
    o button, então coloque a class operation,
    se não existir, coloque vazio:
*/
const Button = props => 

    <button className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}
    onClick={e => props.click && props.click(props.label)} // só chama a função click se existir nas props do botão
    >
        {props.label}
    </button>

export default Button;