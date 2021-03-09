import React, {useState} from 'react';
import {Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register(){
  const [title, setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [value, setValue] = useState('');
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  const data = {
    title,
    description,
    value,
  }

  async function handleNewIncident(e){
    e.preventDefault();
    try{
      await api.post('incidents', data, {headers: {"Authorization": ongId}});
      history.push('/profile');
    }catch(err){
      alert('Erro ao cadastrar novo caso, tente novamente');
    }
    }



  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um heroi para salvar isso.</p>

          <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#E02041"/>
          Voltar para perfil
          </Link>
        </section> 
        <form onSubmit={handleNewIncident}>
          
          <input 
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Titulo do caso" required/>

          <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Descrição" required/>

          <input
           value={value}
           onChange={e => setValue(e.target.value)}
           placeholder="Valor em Reais"required/>

          <button className="button">Cadastrar</button>
          </form>

      </div>
    </div>
  )
}