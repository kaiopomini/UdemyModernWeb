import React from 'react';
import ReactDOM from 'react-dom';
import Primeiro from './components/Primeiro';
import BomDia from './components/BomDia'
import Saudacao from './components/Saudacao'


ReactDOM.render(
  <>
    <Primeiro />
    <BomDia nome="Milla"/>
    <Saudacao tipo="Bom dia" nome="Milla"/>
  </>,
  document.getElementById('root')
);


