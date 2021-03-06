import React, {useState} from 'react';
import {Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    try {
      const response = await api.post('ongs', data);
      localStorage.setItem('ongId', response.data.id);
      history.push('/');
    }catch(err){
      alert('Erro no cadastro tente novamente')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas encontrar casos da sua ONG.</p>

          <Link className="back-link" to="/">
          <FiArrowLeft size={16} color="#E02041"/>
          Voltar para home
          </Link>
        </section> 
        <form onSubmit={handleRegister}>

          <input value={name}
            onChange={e => setName(e.target.value)}
          placeholder="Nome da ONG" required/>

          <input value={email}
           onChange={e => setEmail(e.target.value)}
           type="email" placeholder="E-mail" required/>

          <input value={whatsapp}
           onChange={e => setWhatsapp(e.target.value)}
            placeholder="Whatsapp" required/>

          <div className="input-group" required>
            <input value={city}
           onChange={e => setCity(e.target.value)}
           placeholder="Cidade" required/>

            <input value={uf}
           onChange={e => setUf(e.target.value)}
          placeholder="UF" style={{width: 80}} required/>
          </div>

          <button className="button">Cadastrar</button>
          </form>

      </div>
    </div>
  )
}