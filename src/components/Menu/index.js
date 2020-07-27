import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">    {/* Home */}
                <img className="Logo" src={Logo} alt="Aluraflix logo" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Prop especifica chamada children
            </Button>

        </nav>
    );
}

export default Menu;