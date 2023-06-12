import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import api from '../../services/api';

async function loginUser(credentials) {
  try{
    const response = await api.post('/user/authenticate', credentials)
    console.log(response.data)
    return response.data;
  }catch(e){
    console.log("ERROU")
  }
}

async function registerUser(credentials) {
  return fetch('http://localhost:8085/user/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [nome, setNome] = useState()
  const [password, setPassword] = useState();
  const [opcao, setOpcao] = useState('')

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }

  const handleSubmitRegister = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      nome,
      password
    });
    setToken(token);
  }

  const handleOpcaoClick = (opcaoSelecionada) => {
    setOpcao(opcaoSelecionada);
  };

  if (opcao === "login") {
    return (
      <div class="login-box">
        <div class="info">
          <div class="info-subtitle-login">
            <button onClick={() => setOpcao("")} style={{
              background: 'transparent',
              border: 'none',
              padding: '0px 0px',
              cursor: 'pointer',
              fontSize: '30px',
              color: '#D2691E',
            }}> <FaArrowAltCircleLeft /> </button>
            <span class="title-login">Login</span>
          </div>
          <img class="imagem-dinheiro-login" alt=''
            src='https://dgbijzg00pxv8.cloudfront.net/cbfba7fb-c3ae-4c10-82ef-75c0722ee8e9/000000-0000000000/47517215086456019900384245104372618634562563628521360181433748246852644591703/ITEM_PREVIEW1.png' />
        </div>
        <div class="info-login">
          <form onSubmit={handleSubmit}>
            <div class="user-box">
              <label class="input-label">E-mail</label>
              <input class="input-login" type="text" onChange={e => setEmail(e.target.value)} />
            </div>
            <div class="user-box">
              <label class="input-label">Senha</label>
              <input class="input-login" type="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <button class="button-submit-login" type="submit">
              <span class="span-login">Login</span>
            </button>
          </form>
        </div>
      </div>
    )
  } else if (opcao === "registrar") {
    return (
      <div class="registrar-box">
        <div class="info">
          <div class="info-subtitle">
            <button onClick={() => setOpcao("")} style={{
              background: 'transparent',
              border: 'none',
              padding: '0px 0px',
              cursor: 'pointer',
              fontSize: '30px',
              color: '#D2691E',
            }}> <FaArrowAltCircleLeft /> </button>
            <span class="title-register">Cadastro</span>
          </div>
          <img class="imagem-dinheiro" alt=''
            src='https://dgbijzg00pxv8.cloudfront.net/cbfba7fb-c3ae-4c10-82ef-75c0722ee8e9/000000-0000000000/47517215086456019900384245104372618634562563628521360181433748246852644591703/ITEM_PREVIEW1.png' />
        </div>
        <div class="info">
          <form onSubmit={handleSubmitRegister}>
            <div class="user-box-registro">
              <label class="input-label-registro">E-mail</label>
              <input class="input-login-registro" type="text" onChange={e => setEmail(e.target.value)} />
            </div>
            <div class="user-box-registro">
              <label class="input-label-registro">Nome</label>
              <input class="input-login-registro" type="text" onChange={e => setEmail(e.target.value)} />
            </div>
            <div class="user-box-registro">
              <label class="input-label-registro">Senha</label>
              <input class="input-login-registro" type="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <button class="button-submit" type="submit">
              <span class="span-login">Registrar</span>
            </button>
          </form>
        </div>

      </div>
    )
  }

  return (
    <div class="menu">
      <h1 class="titulo">Selecione uma opção</h1>
      <ul className="opcoes">
        <li onClick={() => handleOpcaoClick('login')}>Login</li>
        <li onClick={() => handleOpcaoClick('registrar')}>Registrar-se</li>
        <li onClick={() => handleOpcaoClick('sair')}>Sair</li>
      </ul>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};