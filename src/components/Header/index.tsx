import style from './index.module.css'
import styleIndex from '../../index.module.css'

import logoHeader from "../../assets/svg/logo.svg";
import { useRef, useState } from 'react';

function Header() {
    const [isNavActive, setIsNavActive] = useState(false);
    const hamburguerRef = useRef(null);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };
  return (
    <>
      <header>
        <nav className={`${style.nav} ${styleIndex.container} ${isNavActive ? 'active' : ''}`}>
            <a href="index.html">
                <img src={logoHeader} alt="Logo Innova AutoCare"/>
            </a>
            <button 
                    className={style.hamburguer}
                    onClick={toggleNav}
                    ref={hamburguerRef}
                >
                </button>
            <ul className={style.nav_list}>
                <li><a href="#sobre-serviço">DIFERENCIAIS</a></li>
                <li><a href="#como-funciona">COMO FUNCIONA</a></li>
                <li><a href="integrantes.html">QUEM SOMOS NÓS</a></li>
                <li><a href="login.html" className={style.area_cliente}>ÁREA DO CLIENTE</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header;