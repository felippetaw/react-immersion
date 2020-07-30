import React from 'react';
import Logo from '../../assets/img/brunaoflix.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="aluraLogo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;