import React, { Component } from 'react';
import './style.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="menu">
          <img src="http://themes.startbootstrap.com/vitality-v2.1.0/img/agency/logo.svg" alt="" />

          <ul>
            <li><a href="#timer">Timer</a></li>
            <li><a href="#yarn">Tópico</a></li>
            <li><a href="#conteudo">Conteudo</a></li>
            <li><a href="#sociais">Sociais</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#carrossel">Slides</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
