import React from 'react';
import './Dashboard.css'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

export default function Dashboard() {
  return (
    <div>
      <div className="content">
        <div className="choose-personagem">
          <button style={{
            background: 'transparent',
            border: 'none',
            padding: '0px 0px',
            cursor: 'pointer',
            fontSize: '30px',
          }}> <FaArrowAltCircleLeft /> </button>
          <div className='imagem'>
          </div>
          <button style={{
            background: 'transparent',
            border: 'none',
            padding: '0px 0px',
            cursor: 'pointer',
            fontSize: '30px',
          }}> <FaArrowAltCircleRight /> </button>
        </div>
        <div className='divButton'>
          <button className='button'> Selecionar </button>
        </div>
      </div>
    </div>
  );
}