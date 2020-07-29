import React, {useState} from 'react';
import {FiLogIn}  from 'react-icons/fi';
import {Link, useHistory}  from 'react-router-dom';
import api from '../../services/api';
import './style.css';
import logoImg  from '../../assets/logo.png';
import capaImg from '../../assets/Capa.png';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';




export default function Logon (){
    const[id, setId ]  = useState('');
    const history = useHistory ();
    async function hendlLogin (e){
        e.preventDefault()

        try {
            history.push('/profile');
            
        }catch (err){
            alert('Falha no login, tente novamente.');
        }

    }
    return(
    <div className="logon-container">
        <section className="form">

        <img src={ logoImg } alt = "logo" />
        <form onSubmit ={hendlLogin}>
            <h1>Faça seu logon </h1>
        <input 
        placeholder = "Digite seu nome de usuário"
        value ={null}
        onChange ={(e) => (e.target.value)}
        />
           <input 
        placeholder = "Digite sua senha"
        value ={null }
        onChange ={(e) => (e.target.value)}
        /> 
        < button className="button  "type="submit">Entrar </button>
        </form>
        </section>
        <img src={ capaImg } alt = "Capa" />

      


    </div>
  
    );
}

