import React, {useState, useEffect} from 'react';
import {FiPower, FiTrash2} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';
import NoIncident from '../NoIncident';


import './styles.css';

export default function Profile(){
  const [incidents, setIncidents] = useState([]);
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();


  if (!localStorage.ongId){
    history.push('/');
  }
  

  useEffect(() => {
    api.get('profile',{headers : {"Authorization": ongId,}})
    .then(response => {setIncidents(response.data)})
    }
  , [ongId]);


  async function handleDeleteIncident(id){
    try {
      await api.delete(`incidents/${id}`,
      {headers : {"Authorization": ongId,}});

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {
      alert(`erro ao deletar`);
    }
  }

  function handleLogout(){
    localStorage.clear();
    history.push('/');
  }


  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incident/new">Cadastra novo caso</Link>
        <button onClick={handleLogout} type="button"><FiPower size={18} color="#E02041" ></FiPower></button>
      </header>
      <h1>Casos Cadastrados</h1>
      <div className="no-incident">
      <NoIncident value={incidents}></NoIncident>
      </div>
      <ul>
       {incidents.map(incident => {
        return (
          <li key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>{Intl.NumberFormat('pt-BR', {style: "currency", currency: 'BRL',}).format(incident.value)}</p>

            <button onClick={() => handleDeleteIncident(incident.id)}type="button">
              <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
            </button>
          </li>)
           }
          ) 
        }
      </ul>
    </div>
  )
}