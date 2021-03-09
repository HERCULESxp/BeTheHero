import React from 'react';
import './styles.css';


export default function NoIncident(props){
  if (props.value.length === 0){
    return (
      <p>Nenhum caso cadastrado!.</p>
    )
  }
    return (
      <p></p>
    )
}